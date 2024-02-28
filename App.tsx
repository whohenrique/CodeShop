import { StatusBar } from 'react-native';
import { SafeAreaView, StyleSheet  } from 'react-native';
import { useFonts, Inter_400Regular, Inter_700Bold,  } from '@expo-google-fonts/inter';
import { ProductProvider } from './src/hooks/ProductContext';
import * as SplashScreen from 'expo-splash-screen';
import { theme } from './src/theme';

import Router from './src/routes';

SplashScreen.preventAutoHideAsync()

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  })

  if(!fontsLoaded) {
    SplashScreen.hideAsync()
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'default'} />
      <ProductProvider>
        <Router />
      </ProductProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: theme.colors.GRAY,
  },
});
