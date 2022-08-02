import { TextInput, View, StyleSheet, Alert } from "react-native";
import React from "react";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import colors from "../constants/colors";
import Title from "../components/Title";

const StartGameScreen = ({ onConfirmNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const resetInputHandler = () => {
    setEnteredNumber("");
  };
  const confirmInputHandler = () => {
    console.log(enteredNumber);
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      // show alert
      Alert.alert(
        "invalid input homie",
        "we can only handle numbers between 1 and 99",
        [{ text: "okie", style: "default", onPress: resetInputHandler }]
      );
      return;
    }
    onConfirmNumber(enteredNumber);
  };

  return (
    <View style={styles.rootScreen}>
      <View>
        <Title>GUESS MY NUMBER</Title>
      </View>
      <View style={styles.inputContainer}>
        <PrimaryButton pressFunction={resetInputHandler}>Reset</PrimaryButton>

        <TextInput
          style={styles.numberInput}
          maxLength={2}
          value={enteredNumber}
          keyboardType="number-pad"
          // autoCapitalize="none"
          // autoCorrect={false}
          onChangeText={(enteredText) => {
            setEnteredNumber(enteredText);
            console.log(enteredText);
          }}
        />
        <PrimaryButton pressFunction={confirmInputHandler}>
          Confirm
        </PrimaryButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    padding: 24,
    marginTop: 24,
  },
  inputContainer: {
    // take up entire available space
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 24,
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    backgroundColor: colors.primaryColor200,
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
    borderBottomColor: colors.gray900,
    borderBottomWidth: 2,
    color: colors.gray900,
    marginVertical: 8,
    fontFamily: "open-sans-bold",
    textAlign: "center",
  },
});

// Gradient

// background: #000000;  /* fallback for old browsers */
// background: -webkit-linear-gradient(to right, #434343, #000000);  /* Chrome 10-25, Safari 5.1-6 */
// background: linear-gradient(to right, #434343, #000000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

export default StartGameScreen;
