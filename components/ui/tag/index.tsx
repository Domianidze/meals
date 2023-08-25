import React, { PropsWithChildren } from "react";
import { View, Text, StyleSheet } from "react-native";

const UITag: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <View style={styles.tag}>
      <Text style={styles.tagText}>{children}</Text>
    </View>
  );
};

export default UITag;

const styles = StyleSheet.create({
  tag: {
    margin: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
    backgroundColor: "black",
  },
  tagText: {
    fontSize: 12,
    color: "white",
    textTransform: "capitalize",
  },
});
