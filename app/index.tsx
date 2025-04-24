import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Image
            source={require('../assets/images/icon.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.title}>React Expo Refact AI</Text>
          <Text style={styles.subtitle}>
            A modern starter template for building cross-platform applications
          </Text>
        </View>

        <View style={styles.featuresContainer}>
          <Text style={styles.sectionTitle}>Features</Text>

          <View style={styles.featureItem}>
            <Text style={styles.featureTitle}>📱 Cross-platform</Text>
            <Text style={styles.featureDescription}>
              Build for iOS, Android, and Web from a single codebase
            </Text>
          </View>

          <View style={styles.featureItem}>
            <Text style={styles.featureTitle}>🧭 Expo Router</Text>
            <Text style={styles.featureDescription}>
              File-based routing for seamless navigation
            </Text>
          </View>

          <View style={styles.featureItem}>
            <Text style={styles.featureTitle}>🎨 Modern UI</Text>
            <Text style={styles.featureDescription}>
              Clean, responsive components ready to use
            </Text>
          </View>

          <View style={styles.featureItem}>
            <Text style={styles.featureTitle}>⚡ Fast Development</Text>
            <Text style={styles.featureDescription}>
              Hot reloading and optimized workflow
            </Text>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Developed with ❤️ using Refact AI Agent
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 40,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    maxWidth: '80%',
  },
  featuresContainer: {
    marginBottom: 40,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  featureItem: {
    marginBottom: 24,
    backgroundColor: '#f8f9fa',
    padding: 16,
    borderRadius: 12,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  featureDescription: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
  footer: {
    marginTop: 20,
    marginBottom: 40,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#888',
  },
});
