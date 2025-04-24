/**
 * This is a simplified version of the useFrameworkReady hook
 * It notifies when the framework is ready for web compatibility
 */

// For React Native web compatibility
declare global {
  interface Window {
    frameworkReady?: () => void;
  }
}

// Make TypeScript recognize the global window object
declare const window: Window & typeof globalThis;

/**
 * Hook to notify when the framework is ready
 * Used for web compatibility
 */
export function useFrameworkReady() {
  // Use a simple effect pattern without React import
  setTimeout(() => {
    // Check if window exists (for web environment)
    if (typeof window !== 'undefined') {
      window.frameworkReady?.();
    }
  }, 0);

  // Return empty cleanup function
  return () => {};
}
