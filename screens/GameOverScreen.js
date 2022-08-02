import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Title from "../components/Title";
import colors from "../constants/colors";
import PrimaryButton from "../components/PrimaryButton";

const GameOverScreen = ({ rounds, userNumber, startNewGame }) => {
  return (
    <View style={styles.rootScreen}>
      <Title>GAME OVER</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/damiano-lingauri-uW_oj3jOPRg-unsplash.jpg")}
          style={{
            opacity: 0.5,
            width: 400,
            height: 200,
            marginBottom: 12,
            resizeMode: "cover",
          }}
        />
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlightText}>{rounds}</Text>{" "}
          rounds to guess your number{" "}
          <Text style={styles.highlightText}>{userNumber}</Text>
        </Text>
        <PrimaryButton pressFunction={startNewGame}>
          Start New Game
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
    zIndex: 1,
  },
  imageContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 24,
    marginTop: 24,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingBottom: 24,
    backgroundColor: colors.primaryColor200,
    // elevation works only in android
    elevation: 4,
    // shadow is for ios
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    overflow: "hidden",
  },
  summaryText: {
    fontFamily: "open-sans",
    marginBottom: 24,
    fontSize: 16,
  },
  highlightText: {
    fontFamily: "open-sans-bold",
  },
});

export default GameOverScreen;
