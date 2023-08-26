import React from "react";
import { FlatList, Pressable, View, Text, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/App";
import UIImage from "@/components/ui/image";
import UITag from "@/components/ui/tag";
import { CATEGORIES, MEALS } from "@/data/dummy-data";

type Props = NativeStackScreenProps<RootStackParamList, "category">;

const CategoryScreen = ({ navigation, route }: Props) => {
  const { categoryId } = route.params;

  const clickHandler = (mealId: string) => {
    navigation.navigate("meal", { mealId });
  };

  React.useLayoutEffect(() => {
    const category = CATEGORIES.find((item) => item.id === categoryId);

    if (!category) return;

    navigation.setOptions({ title: category.title });
  }, [categoryId]);

  const meals = MEALS.filter((item) => item.categoryIds.includes(categoryId));

  return (
    <FlatList
      data={meals}
      renderItem={({ item }) => (
        <Pressable
          style={({ pressed }) => [
            styles.meal,
            { opacity: pressed ? 0.75 : 1 },
          ]}
          onPress={clickHandler.bind(this, item.id)}
        >
          <View style={styles.mealImage}>
            <UIImage source={{ uri: item.imageUrl }} />
          </View>
          <View style={styles.mealDescription}>
            <Text style={styles.mealTitle}>{item.title}</Text>
            <View style={styles.mealTags}>
              <UITag>{item.duration}m</UITag>
              <UITag>{item.complexity}</UITag>
              <UITag>{item.affordability}</UITag>
            </View>
          </View>
        </Pressable>
      )}
    />
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  meal: {
    flex: 1,
    margin: 16,
    height: 300,
    backgroundColor: "white",
    borderRadius: 16,
    overflow: "hidden",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  mealImage: {
    flex: 3,
  },
  mealDescription: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
  mealTitle: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
  },
  mealTags: {
    flexDirection: "row",
  },
});
