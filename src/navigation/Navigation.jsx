import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/Home";
import Projects from "../screens/Projects";
import ProjectDetail from "../screens/ProjectDetail";
import Calender from "../screens/Calender";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function StackNav() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerTitleAlign: "center",
        headerTintColor: "#D9ECF2",
        headerStyle: {
          backgroundColor: "rgba(0, 45, 64, 1)",
        },
      }}
    >
      <Stack.Screen component={HomeScreen} name="Home" />
      <Stack.Screen component={ProjectDetail} name="projectDetail" />
      <Stack.Screen component={Projects} name="projects" />
    </Stack.Navigator>
  );
}

function Nav() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerTitleAlign: "center",
        headerTintColor: "#D9ECF2",
        headerStyle: {
          backgroundColor: "rgba(0, 45, 64, 1)",
        },
        tabBarStyle: {
          backgroundColor: "rgba(0, 45, 64, 1)",
          height:70,
        },
        
      }}
    >
      <Tab.Screen 
        component={Calender}
        name='Calender'
        options={{ tabBarShowLabel: false }}

      />
      <Tab.Screen
        component={StackNav}
        name="home"
        options={{ headerShown: false, tabBarShowLabel: false }}
      />
 
    </Tab.Navigator>
  );
}

export default Nav;
