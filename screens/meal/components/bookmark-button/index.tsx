import React from "react";
import { Pressable, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

type Props = {
  isBookmarked?: boolean;
};

const BookmarkButton: React.FC<Props> = ({ isBookmarked }) => {
  return (
    <Pressable style={({ pressed }) => (pressed ? styles.buttonPressed : {})}>
      <Ionicons
        name={isBookmarked ? "bookmark" : "bookmark-outline"}
        size={26}
        color="black"
      />
    </Pressable>
  );
};

export default BookmarkButton;

const styles = StyleSheet.create({
  buttonPressed: {
    opacity: 0.75,
  },
});
