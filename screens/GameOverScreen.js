import { Text, View, StyleSheet, Image } from "react-native";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import PrimaryButton from "../components/UI/PrimaryButton";
import Title from "../components/UI/Title";
import Colors from "../constants/colors";
const GameOverScreen = ({ onGameOver, logRounds, userNumber }) => {
  return (
    <View style={styles.mainContainer}>
      <Title style={styles.title}>GAME OVER</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}></Image>
      </View>
      <Text style={styles.text}>
        Your phone needed{" "}
        <Text style={styles.sumarryText}>{logRounds.length}</Text> rounds to
        guess the number <Text style={styles.sumarryText}>{userNumber}</Text>.
      </Text>
      <View>
        <PrimaryButton onPress={onGameOver}>Start New Game</PrimaryButton>
      </View>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  title: { marginBottom: 24 },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 4,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  text: {
    fontFamily: "roboto-regular",
    fontSize: 24,
    color: Colors.primary500,
    textAlign: "center",
    margin: 12,
  },
  sumarryText: {
    color: "#140d72",
    fontFamily: "roboto-bold",
    fontSize: 29,
  },
});
