import React from "react";
import { View, StyleSheet } from "react-native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { RootTabParamList } from "@/App";

type Props = BottomTabScreenProps<RootTabParamList, "bookmarks">;

const BookmarksScreen = ({ navigation, route }: Props) => {
  return <View></View>;
};

export default BookmarksScreen;

const styles = StyleSheet.create({});
