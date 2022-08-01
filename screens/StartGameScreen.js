import { TextInput, View, StyleSheet } from "react-native";
import React from "react";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {
  return (
    <View style={styles.inputContainer}>
      <PrimaryButton>Reset</PrimaryButton>

      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        // autoCapitalize="none"
        // autoCorrect={false}
      />
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    // take up entire available space
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    backgroundColor: "#D9F1FD",
    // elevation works only in android
    elevation: 4,
    // shadow is for ios
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#065175",
    borderBottomWidth: 2,
    color: "#065175",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
});

// Gradient

// background: #000000;  /* fallback for old browsers */
// background: -webkit-linear-gradient(to right, #434343, #000000);  /* Chrome 10-25, Safari 5.1-6 */
// background: linear-gradient(to right, #434343, #000000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

export default StartGameScreen;
