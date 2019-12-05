import React, { useState } from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo'
import MealsNavigator from './navigation/MealsNavigator';
import { useScreens } from "react-native-screens";

const fetchFonts = () => {
  Font.loadAsync({
    'latoRegular': require('./assets/fonts/Lato/Lato-Regular.ttf'),
    'latoBold': require('./assets/fonts/Lato/Lato-Bold.ttf'),
    'latoLight': require('./assets/fonts/Lato/Lato-Light.ttf'),
  })
};

useScreens(); // just increases litle bit performance

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  if (!AppLoading) {
    <AppLoading
      startAsync={fetchFonts}
      onFinish={setFontLoaded(true)}
      onError={(error) => { console.log(error); }}
    />
  }


  return <MealsNavigator />;
}


