import { View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
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
});
