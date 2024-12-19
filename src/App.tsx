import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import * as React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import "../index.css";
import { RootStack, RootStackParamList } from "./router/RootStackRoute";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export default function App() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, "Home">>();
  const routeTab = () => {
    return (
      <View>
        <Button title="Home" onPress={() => navigation.navigate("Home")} />
      </View>
    );
  };

  return (
    <NavigationContainer>
      <RootStack />
      <View>
        <Button title="HOME" />
        <Button title="INTRODUCTION" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
