import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Aora!</Text>
      <StatusBar style="auto" />
      <Link href={"/profile"} style={{ color: "blue" }}>
        Go to Profile
      </Link>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
