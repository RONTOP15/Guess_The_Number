import { TextInput, View, StyleSheet, Alert, Text } from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/UI/PrimaryButton";
import Colors from "../constants/colors";
import Title from "../components/UI/Title";
import Card from "../components/UI/Card";
import InstructionText from "../components/UI/InstructionText";
//
const StartGameScreen = ({ onPickNumber }) => {
  const [enteredNumber, setEneteredNumber] = useState("");

  const numberInputHandler = (inputText) => {
    setEneteredNumber(inputText);
  };

  const resetInputHandler = () => {
    setEneteredNumber("");
  };

  const confirmInputHandler = () => {
    const choosenNumber = parseInt(enteredNumber);
    if (isNaN(choosenNumber) || enteredNumber <= 0 || enteredNumber > 99) {
      setTimeout(() => {
        Alert.alert(
          "Invalid number!",
          "Number has to be a number between 1 and 99",
          [{ text: "Okay", style: "desctructive", onPress: resetInputHandler }]
        );
      }, 150);
      return;
    }
    onPickNumber(choosenNumber);
  };

  return (
    <View style={styles.rootContainer}>
      <Title>Guess The Number</Title>
      <Card>
        <InstructionText style={styles.instructionText}>
          Enter A Number
        </InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          inputText={enteredNumber}
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },

  numberInput: {
    color: Colors.accent500,
    fontSize: 32,
    fontWeight: "bold",
    height: 50,
    width: 50,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    textAlign: "center",
    marginBottom: 10,
  },
  instructionText: {
    margin: 5,
    borderBottomColor: Colors.accent200,
    borderBottomWidth: 1,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
