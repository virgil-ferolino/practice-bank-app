import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import Intro from "../pages/Intro";
import React from "react";

export const routes = [
  {
    name: "Home",
    component: Home,
  },
  {
    name: "Introduction",
    component: Intro,
  },
];

const Stack = createNativeStackNavigator();

export const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName="Introduction">
      {routes.map((tabs, index) => (
        <Stack.Screen key={index} name={tabs.name} component={tabs.component} />
      ))}
    </Stack.Navigator>
  );
};
