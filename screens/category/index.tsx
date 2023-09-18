import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeStackParamList } from "@/App";
import MealsList from "@/components/meals-list";
import { CATEGORIES, MEALS } from "@/data/dummy-data";

type Props = NativeStackScreenProps<HomeStackParamList, "category">;

const CategoryScreen = ({ navigation, route }: Props) => {
  const { categoryId } = route.params;

  React.useLayoutEffect(() => {
    const category = CATEGORIES.find((item) => item.id === categoryId);

    if (!category) return;

    navigation.setOptions({ title: category.title });
  }, [categoryId]);

  const meals = MEALS.filter((item) => item.categoryIds.includes(categoryId));

  return <MealsList meals={meals} />;
};

export default CategoryScreen;
