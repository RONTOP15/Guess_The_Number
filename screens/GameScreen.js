import { View, Text, StyleSheet } from "react-native";
import Title from "../components/Title";
const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Title>Oppenent's Guess</Title>

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
