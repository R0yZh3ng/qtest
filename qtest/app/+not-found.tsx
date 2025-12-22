import { Text, View, StyleSheet} from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This page does not exist, head back to Home</Text>
      <Link href={"/"} style={styles.button}>
        Home Page
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e",
  },

  text: {
    color: "#ffffff",
  },

  button: {
    color: "#ffffff",
    fontSize: 20,
    textDecorationLine: "underline",
  }

});
