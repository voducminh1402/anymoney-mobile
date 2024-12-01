import React from 'react';
import { useFonts } from 'expo-font';
import AppNavigation from '../navigations/AppNavigation';
import { SafeAreaView } from 'react-native';
import { styles } from '../styles/CommonStyle';

export default function RootLayout() {
  useFonts({
    'outfit': require('../assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('../assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold': require('../assets/fonts/Outfit-Bold.ttf'),
    'outfit-light': require('../assets/fonts/Outfit-Light.ttf'),
  });

  return (
    <SafeAreaView style={styles.container}>
      <AppNavigation />
    </SafeAreaView>
  );
}
