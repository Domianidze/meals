import React from "react";
import { View, Text, StyleSheet } from "react-native";
import UITag from "../tag";

type Props = {
  title: string;
  data: string[];
};

const UIList: React.FC<Props> = ({ title, data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.itemsContainer}>
        {data.map((item) => (
          <UITag key={item} style={styles.item}>
            {item}
          </UITag>
        ))}
      </View>
    </View>
  );
};

export default UIList;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    margin: 16,
    backgroundColor: "white",
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
  title: {
    marginBottom: 12,
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
  },
  itemsContainer: {
    alignItems: "center",
  },
  item: {
    width: "100%",
  },
});
