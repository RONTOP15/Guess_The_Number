import { TextInput, View, StyleSheet, Alert, Keyboard } from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../constants/colors";
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
    Keyboard.dismiss();
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
    <View style={styles.inputContainer}>
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
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    padding: 16,
    marginHorizontal: 24,
    backgroundColor: Colors.primart800,
    borderRadius: 8,
    elevation: 6,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.4,
  },

  numberInput: {
    color: "#ddb52f",
    fontSize: 32,
    fontWeight: "bold",
    height: 50,
    width: 50,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    textAlign: "center",
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
