import { View, Text, StyleSheet, Alert, FlatList } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import Title from "../components/Title";
import colors from "../constants/colors";
import PrimaryButton from "../components/PrimaryButton";
import { Ionicons } from "@expo/vector-icons";

const generateRandomNumber = (min, max, exclude) => {
  const randomNum = min + Math.floor(Math.random() * (max - min));
  if (randomNum === exclude) {
    return generateRandomNumber(min, max, exclude);
  }
  return randomNum;
};

const GameScreen = ({ userNumber, onGameOver }) => {
  const userNumberInt = parseInt(userNumber);
  const minBoundary = useRef(1),
    maxBoundary = useRef(99),
    initialGuess = generateRandomNumber(1, 99, userNumberInt);
  const [guess, setGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    console.log("inside useEffect", { guess });
    if (guess === userNumberInt) onGameOver(guessRounds.length);
  }, [guess, userNumberInt, onGameOver]);

  const getNewNumber = (direction) => {
    if (
      (direction === "lower" && guess < userNumberInt) ||
      (direction === "higher" && guess > userNumberInt)
    ) {
      return Alert.alert("liar liar pants on fire", "", [
        { text: "sorry senpai", style: "cancel" },
      ]);
    }
    if (direction === "lower") maxBoundary.current = guess;
    else minBoundary.current = guess + 1;
    // else setMinBoundary(() => guess + 1);
    console.log({
      direction,
      guess,
      userNumberInt,
      minBoundary: minBoundary.current,
      maxBoundary: maxBoundary.current,
    });
    const newGuess = generateRandomNumber(
      minBoundary.current,
      maxBoundary.current,
      guess
    );
    setGuess(newGuess);
    setGuessRounds((currentGuessRounds) => [newGuess, ...currentGuessRounds]);
  };

  return (
    <View style={styles.screen}>
      <Title>OPPONENT'S GUESS</Title>
      <View style={styles.numberContainer}>
        <PrimaryButton pressFunction={() => getNewNumber("higher")}>
          <Ionicons name="md-add" size={24} color={colors.primaryColor900} />
        </PrimaryButton>
        <Text style={styles.numberText}>{guess}</Text>

        <PrimaryButton pressFunction={() => getNewNumber("lower")}>
          <Ionicons name="md-remove" size={24} color={colors.primaryColor900} />
        </PrimaryButton>
        {/* <Text style={{ fontSize: 18, marginTop: 12 }}>Higher or lower?</Text> */}
        {/* <View style={styles.buttonContainer}> */}

        {/* </View> */}
      </View>
      <View style={{ flex: 5 }}>
        <FlatList
          data={guessRounds}
          renderItem={({ item }) => (
            <View style={styles.logCard}>
              <Text
                style={{
                  width: "100%",
                  textAlign: "center",
                  fontSize: 16,
                  fontFamily: "open-sans",
                }}
              >
                {item}
              </Text>
            </View>
          )}
          keyExtractor={(item, index) => `${index}-${item}`}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    marginTop: 24,
  },
  numberContainer: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 24,
    marginTop: 24,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: colors.primaryColor200,
    // elevation works only in android
    elevation: 4,
    // shadow is for ios
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberText: {
    fontSize: 32,
    textAlign: "center",
    // width: "100%",
    fontFamily: "open-sans-bold",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 64,
    justifyContent: "space-between",
    marginTop: 12,
  },
  logCard: {
    marginHorizontal: 24,
    marginTop: 12,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: colors.primaryColor200,
    // elevation works only in android
    elevation: 4,
    // shadow is for ios
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});

export default GameScreen;
