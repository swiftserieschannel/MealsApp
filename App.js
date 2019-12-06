import React, { useState } from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo'
import MealsNavigator from './navigation/MealsNavigator';
import { enableScreens } from "react-native-screens";

const fetchFonts = () => {
  return Font.loadAsync({
    'latoRegular': require('./assets/fonts/Lato/Lato-Regular.ttf'),
    'latoBold': require('./assets/fonts/Lato/Lato-Bold.ttf'),
    'latoLight': require('./assets/fonts/Lato/Lato-Light.ttf'),
  });
};

enableScreens(); // just increases litle bit performance

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setFontLoaded(true)}
      onError={(error) => { console.log(error); }}
    />
  }


  return <MealsNavigator />;
}


