import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const LogRounds = ({ children }) => {
  return (
    <View style={styles.logContainer}>
      <Text style={styles.logText}>{children}</Text>
    </View>
  );
};

export default LogRounds;

const styles = StyleSheet.create({
  logContainer: {
    margin: 6,
    padding: 8,
    borderWidth: 2,
    borderColor: Colors.primary500,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  logText: {
    fontFamily: "roboto-bold",
    fontSize: 24,
    color: Colors.primary500,
  },
});
