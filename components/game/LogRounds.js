import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const LogRounds = ({ children, index }) => {
  return (
    <View style={styles.logContainer}>
      <Text style={styles.logText}>#{index + 1}</Text>
      <Text style={styles.logText}>Opponent's Guess : {children}</Text>
    </View>
  );
};

export default LogRounds;

const styles = StyleSheet.create({
  logContainer: {
    padding: 8,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: Colors.accent500,
    borderColor: Colors.primary500,
    borderRadius: 20,
    marginTop: 10,
    marginHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    flexDirection: "row",
  },
  logText: {
    fontFamily: "roboto-bold",
    fontSize: 18,
    color: Colors.primary500,
  },
});
