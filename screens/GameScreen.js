import { useState } from "react";

import { View, Text, StyleSheet, Alert } from "react-native";
import Title from "../components/UI/Title";

import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/UI/PrimaryButton";
import { useEffect } from "react/cjs/react.development";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}
let minBoundary = 1;
let maxBoundary = 100;
//
const GameScreen = ({ userNumber, onGameOver }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [userNumber, currentGuess, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("You Lie!", "You know this is not true!!", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }

    if (direction == "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );

    console.log(` direction : ${direction}`);
    console.log(` newRndNumber : ${newRndNumber}`);
    console.log(` minBoundary : ${minBoundary}`);
    console.log(` userNumber : ${userNumber}`);
    console.log(` maxBoundary : ${maxBoundary}`);
    console.log("-----------");
    setCurrentGuess(newRndNumber);
  };
  // if (currentGuess == userNumber) {
  //   Alert.alert(
  //     "Game Over",
  //     "The Application Guessed Your number wich is " + currentGuess + " !",
  //     [
  //       {
  //         text: "Try Again",
  //         style: "destructive",
  //         onPress: gameOver,
  //       },
  //     ]
  //   );
  // }

  return (
    <View style={styles.screen}>
      <Title>Oppenent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <NumberContainer>{userNumber}</NumberContainer>
      <View>
        <Text>Higher or Lower</Text>
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
            -
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
            +
          </PrimaryButton>
        </View>
      </View>
      <View>
        <View>
          <Text>LOG ROUNSD</Text>
        </View>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
