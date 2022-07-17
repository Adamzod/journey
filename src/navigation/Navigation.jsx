import * as React from "react";
import { createNativeStackNavigator  } from "@react-navigation/native-stack";

import HomeScreen from "../screens/Home";
import Projects from '../screens/Projects'
import ProjectDetail from "../screens/ProjectDetail";

const Stack = createNativeStackNavigator ();


function Nav() {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShadowVisible : false,
            headerTitleAlign: 'center',
            headerTintColor: '#D9ECF2',
            headerStyle: {
              backgroundColor: 'rgba(0, 45, 64, 1)',
            
            }
        }}
    >
      <Stack.Screen component={ProjectDetail} name='projectDetail' />
      <Stack.Screen component={Projects} name='projects' />
      <Stack.Screen component={HomeScreen} name="home" />
    </Stack.Navigator>
  );
}


export default Nav
