import React, { PropsWithChildren } from "react";
import { View, Text, StyleSheet, ViewStyle } from "react-native";

type Props = {
  style?: ViewStyle;
};

const UITag: React.FC<PropsWithChildren<Props>> = ({ children, style }) => {
  return (
    <View style={[styles.tag, style]}>
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
    textAlign: "center",
    textTransform: "capitalize",
  },
});
