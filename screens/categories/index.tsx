import React from "react";
import { FlatList, Pressable, Text, StyleSheet } from "react-native";
import { CATEGORIES } from "@/data/dummy-data";

const CategoriesScreen: React.FC = () => {
  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      renderItem={({ item }) => (
        <Pressable
          style={({ pressed }) => [
            styles.category,
            { backgroundColor: item.color, opacity: pressed ? 0.75 : 1 },
          ]}
        >
          <Text style={styles.categoryText}>{item.title}</Text>
        </Pressable>
      )}
    />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  category: {
    flex: 1,
    margin: 16,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  categoryText: {
    fontSize: 18,
    fontWeight: "600",
  },
  categoryPressed: {
    opacity: 0.8,
  },
});
