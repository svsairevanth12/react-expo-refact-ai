# Publishing to npm

This document explains how to publish the React Expo Refract AI template to npm.

## Prerequisites

1. Create an npm account if you don't have one already:
   - Go to [npmjs.com](https://www.npmjs.com/) and sign up

2. Log in to npm from your terminal:
   ```bash
   npm login
   ```

## Publishing Steps

1. Make sure your package.json is properly configured:
   - name: "react-expo-refract-ai"
   - version: Update this when publishing a new version
   - private: false
   - bin: Points to your CLI script

2. Test your package locally:
   ```bash
   npm pack
   ```
   This will create a .tgz file that you can install locally to test.

3. Publish to npm:
   ```bash
   npm publish
   ```

## Updating the Package

1. Update the version in package.json:
   ```json
   "version": "1.0.1"
   ```

2. Publish the new version:
   ```bash
   npm publish
   ```

## Using the Published Package

Once published, users can create a new project using:

```bash
npx react-expo-refract-ai my-app
```

This will:
1. Create a new directory called "my-app"
2. Copy all template files into the new directory
3. Install all dependencies
4. Set up the project with the React Expo Refract AI template
