import { useState } from "react";

import { View, Text, StyleSheet } from "react-native";
import Title from "../components/UI/Title";

import NumberContainer from "../components/game/NumberContainer";
const generateRandomNumberBetween = (min, max, exclude) => {
  const rndNumber = Math.floor(Math.random() * (max - min)) + min;

  console.log(rndNumber);
  if (rndNumber === exclude) {
    return generateRandomNumberBetween(min, max, exclude);
  } else {
    return rndNumber;
  }
};

const GameScreen = ({ userNumber }) => {
  const initialGuess = generateRandomNumberBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  return (
    <View style={styles.screen}>
      <Title>Oppenent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower</Text>
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
