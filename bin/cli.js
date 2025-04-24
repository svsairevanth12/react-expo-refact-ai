#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Get project name from command line arguments
const projectName = process.argv[2];

if (!projectName) {
  console.error('Please specify a project name:');
  console.error('  npx react-expo-refact-ai my-app');
  process.exit(1);
}

const currentDir = process.cwd();
const projectDir = path.join(currentDir, projectName);

// Create project directory
if (fs.existsSync(projectDir)) {
  console.error(`Error: Directory ${projectName} already exists. Please choose a different name.`);
  process.exit(1);
}

// Create project directory
fs.mkdirSync(projectDir, { recursive: true });

// Function to copy template files
function copyTemplateFiles(sourcePath, targetPath) {
  // Get the absolute path of the template directory
  const templateDir = path.resolve(__dirname, '..', sourcePath);
  const targetDir = path.join(projectDir, targetPath);

  // Create target directory if it doesn't exist
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  // Read all files in the source directory
  const files = fs.readdirSync(templateDir);

  // Copy each file to the target directory
  for (const file of files) {
    const sourceFilePath = path.join(templateDir, file);
    const targetFilePath = path.join(targetDir, file);

    // Check if the current item is a directory
    if (fs.statSync(sourceFilePath).isDirectory()) {
      // Recursively copy subdirectories
      copyTemplateFiles(path.join(sourcePath, file), path.join(targetPath, file));
    } else {
      // Skip node_modules, .git, and other unnecessary files
      if (file === 'node_modules' || file === '.git' || file === 'package-lock.json') {
        continue;
      }

      // Copy the file
      fs.copyFileSync(sourceFilePath, targetFilePath);
    }
  }
}

// Copy template files
try {
  // Copy app directory
  copyTemplateFiles('app', 'app');

  // Copy assets directory
  copyTemplateFiles('assets', 'assets');

  // Copy hooks directory
  copyTemplateFiles('hooks', 'hooks');

  // Copy configuration files
  const configFiles = [
    'app.json',
    'tsconfig.json',
    'README.md',
    'LICENSE',
    '.prettierrc',
    '.gitignore'
  ];

  for (const file of configFiles) {
    const sourceFilePath = path.resolve(__dirname, '..', file);
    const targetFilePath = path.join(projectDir, file);

    if (fs.existsSync(sourceFilePath)) {
      fs.copyFileSync(sourceFilePath, targetFilePath);
    }
  }

  // Create a new package.json for the project
  const packageJson = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'package.json'), 'utf8'));

  // Modify package.json for the new project
  const newPackageJson = {
    name: projectName,
    version: '0.1.0',
    private: true,
    main: 'expo-router/entry',
    scripts: packageJson.scripts,
    dependencies: packageJson.dependencies,
    devDependencies: packageJson.devDependencies
  };

  // Write the new package.json
  fs.writeFileSync(
    path.join(projectDir, 'package.json'),
    JSON.stringify(newPackageJson, null, 2)
  );

  // Update app.json with the new project name
  const appJson = JSON.parse(fs.readFileSync(path.join(projectDir, 'app.json'), 'utf8'));
  appJson.expo.name = projectName;
  appJson.expo.slug = projectName;

  fs.writeFileSync(
    path.join(projectDir, 'app.json'),
    JSON.stringify(appJson, null, 2)
  );

  console.log('Template files copied successfully!');

  console.log(`
Project ${projectName} created successfully!

To get started:
  cd ${projectName}
  npm install    (This may take a few minutes)
  npm run dev

GitHub Repository: https://github.com/svsairevanth12/react-expo-refact-ai

Note: We've made the setup faster by not installing dependencies automatically.
You'll need to run 'npm install' yourself, which gives you more control over the process.

Happy coding!
  `);

} catch (error) {
  console.error('Error creating project:', error);
  process.exit(1);
}
