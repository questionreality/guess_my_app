import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import colors from "../constants/colors";

const PrimaryButton = ({ children, pressFunction }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={pressFunction}
        android_ripple={{ color: colors.primaryColor100 }}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  buttonInnerContainer: {
    backgroundColor: "white",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: colors.primaryColor900,
    textAlign: "center",
    fontFamily: "open-sans",
  },
  buttonOuterContainer: {
    borderRadius: 30,
    margin: 4,
    overflow: "hidden",
  },
  pressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
