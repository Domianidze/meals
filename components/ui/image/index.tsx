import React from "react";
import { Image, ImageProps, StyleSheet } from "react-native";

const UIImage: React.FC<ImageProps> = (props) => {
  return <Image style={[styles.image, props.style]} {...props} />;
};

export default UIImage;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
});
