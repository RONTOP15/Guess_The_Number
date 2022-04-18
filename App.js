import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

//
import Colors from "./constants/colors";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
//

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [logRounds, setLogRounds] = useState([]);

  const [fontsLoaded] = useFonts({
    "roboto-regular": require("./assets/fonts/RobotoSlab-Regular.ttf"),
    "roboto-bold": require("./assets/fonts/RobotoSlab-Bold.ttf"),
  });

  const addLogHandler = (number) => {
    setLogRounds([...logRounds, number]);
  };

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const gameOverHandler = () => {
    if (!gameIsOver) {
      setGameIsOver(true);
    } else {
      setGameIsOver(false);
      setLogRounds([]);
      setUserNumber();
    }
  };
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen
        userNumber={userNumber}
        onGameOver={gameOverHandler}
        addLogHandler={addLogHandler}
        logRounds={logRounds}
        // setLogRounds={setLogRounds}
      />
    );
  }
  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen logRounds={logRounds} onGameOver={gameOverHandler} />
    );
  }

  return (
    <LinearGradient
      style={styles.rootContainer}
      colors={[Colors.primary500, "#ecd551"]}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootContainer}
        imageStyle={styles.imageBackground}
        ד
      >
        <SafeAreaView style={styles.rootContainer}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  imageBackground: {
    opacity: 0.15,
  },
});
