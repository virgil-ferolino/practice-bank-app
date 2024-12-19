import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import Intro from "../pages/Intro";
import React, { ComponentType } from "react";

interface RouterType {
  name: keyof RootStackParamList;
  component: ComponentType;
}

export type RootStackParamList = {
  Home: undefined;
  Introduction: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName="Introduction">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Introduction" component={Intro} />
    </Stack.Navigator>
  );
};
