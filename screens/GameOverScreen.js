import { Text, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/UI/PrimaryButton";
import { Button } from "react-native-web";
import Colors from "../constants/colors";
const GameOverScreen = ({ onGameOver }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Game Over</Text>
      <View>
        <PrimaryButton onPress={onGameOver}>Play Again</PrimaryButton>
      </View>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  container: {
    margin: 24,
    padding: 14,
    borderColor: "#4b49cd",
    borderRadius: 3,
    borderWidth: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    color: "red",
    fontSize: 36,
    fontWeight: "bold",
  },
});
