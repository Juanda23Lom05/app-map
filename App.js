import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import MapPage from "./pages/MapPage";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MapPage />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
