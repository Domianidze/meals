import React from "react";
import { Pressable, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

type Props = {
  isBookmarked?: boolean;
  onPress?: () => void;
};

const BookmarkButton: React.FC<Props> = ({ isBookmarked, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => (pressed ? styles.buttonPressed : {})}
      onPress={onPress}
    >
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
