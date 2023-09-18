import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import MealsList from "@/components/meals-list";
import { MEALS } from "@/data/dummy-data";

const BookmarksScreen = () => {
  const bookmarkIds = useSelector((state: RootState) => state.bookmarks.ids);
  const meals = MEALS.filter((meal) => bookmarkIds.includes(meal.id));

  return <MealsList meals={meals} />;
};

export default BookmarksScreen;
