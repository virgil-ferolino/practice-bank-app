import { Button, StyleSheet, View } from "react-native";
import * as React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import "../index.css";
import { RootStack } from "./router/RootStackRoute";

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
