import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";
//
const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: "roboto-bold",
    // fontWeight: "bold",
    textAlign: "center",
    color: "white",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 4,
    padding: 12,
  },
});
