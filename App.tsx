import { useState } from 'react'; 
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View,  } from 'react-native';
import Router from './src/routes';

import { theme } from './src/theme';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Router />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.GRAY,
  },
});
