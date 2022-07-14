import React from "react";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import {theme} from './src/themes/Theme.jsx'
import HomeScreen from "./src/screens/Home";
import Nav from "./src/navigation/Navigation";



import {
  useFonts,
  Lato_400Regular,
  Lato_700Bold,
} from "@expo-google-fonts/lato";



export default function App() {

  let [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
  });
  

  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Nav />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
