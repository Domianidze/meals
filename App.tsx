import { View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import CategoriesScreen from "@/screens/categories";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <CategoriesScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 32,
  },
});
