import { Text, View, StyleSheet} from "react-native";

export default function Zetamac() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>this is where the zetamac page will be</Text>
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

});
