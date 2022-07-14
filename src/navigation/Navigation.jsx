import * as React from "react";
import { createNativeStackNavigator  } from "@react-navigation/native-stack";

import HomeScreen from "../screens/Home";

const Stack = createNativeStackNavigator ();


function Nav() {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShadowVisible : false,
            headerTitleAlign: 'center'
        }}
    >
      <Stack.Screen component={HomeScreen} name="task" />
    </Stack.Navigator>
  );
}


export default Nav
