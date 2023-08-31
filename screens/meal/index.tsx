import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/App";
import UIImage from "@/components/ui/image";
import UITag from "@/components/ui/tag";
import UIList from "@/components/ui/list";
import { MEALS } from "@/data/dummy-data";
import BookmarkButton from "./components/bookmark-button";

type Props = NativeStackScreenProps<RootStackParamList, "meal">;

const MealScreen = ({ navigation, route }: Props) => {
  const { mealId } = route.params;

  const meal = MEALS.find((item) => item.id === mealId);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <BookmarkButton isBookmarked={false} />,
    });
  }, []);

  if (!meal) {
    return null;
  }

  return (
    <ScrollView>
      <View style={styles.mealImage}>
        <UIImage source={{ uri: meal.imageUrl }} />
      </View>
      <View style={styles.mealDescription}>
        <Text style={styles.mealTitle}>{meal.title}</Text>
        <View style={styles.mealTags}>
          <UITag>{meal.duration}m</UITag>
          <UITag>{meal.complexity}</UITag>
          <UITag>{meal.affordability}</UITag>
        </View>
      </View>
      <UIList title="Ingredients" data={meal.ingredients} />
      <UIList title="Steps" data={meal.steps} />
    </ScrollView>
  );
};

export default MealScreen;

const styles = StyleSheet.create({
  mealImage: {
    height: 250,
  },
  mealDescription: {
    paddingHorizontal: 16,
    paddingVertical: 8,
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
