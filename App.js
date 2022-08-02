import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(true);
  const [rounds, setRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  function onConfirmNumber(pickedNumber) {
    console.log("number picked");
    setUserNumber(pickedNumber);
    setGameOver(false);
  }
  function onGameOver(guessRoundsLength) {
    console.log("game over");
    setGameOver(true);
    setRounds(guessRoundsLength);
  }
  function startNewGame() {
    console.log("start new game");
    setUserNumber(null);
    setRounds(0);
  }

  let screen = <StartGameScreen onConfirmNumber={onConfirmNumber} />;
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={onGameOver} />;
  }
  if (gameOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        rounds={rounds}
        startNewGame={startNewGame}
      />
    );
  }

  return (
    <LinearGradient
      colors={["#0052D4", "#65C7F7", "#9CECFB"]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/billy-huynh-v9bnfMCyKbg-unsplash.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={{ opacity: 0.6 }}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  rootScreen: {
    flex: 1,
    // backgroundColor: "#9CECFB",
  },
});

// background: #9CECFB;  /* fallback for old browsers */
// background: -webkit-linear-gradient(to right, #0052D4, #65C7F7, #9CECFB);  /* Chrome 10-25, Safari 5.1-6 */
// background: linear-gradient(to right, #0052D4, #65C7F7, #9CECFB); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
