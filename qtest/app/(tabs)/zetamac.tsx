import { Text, View, StyleSheet, Button, TextInput } from "react-native";
import React, { useState, useEffect } from "react";

export default function Zetamac() {
  const [score, setScore] = useState(0);

  const [randomInt, generateRandom] = useState(Math.floor(Math.random() * 999));
  const [randomInt2, generateRandom2] = useState(Math.floor(Math.random() * 999));
  const [operation, generateOperation] = useState(Math.floor(Math.random() * 3));

  let answer: number;
  
  switch (operation) {
      case 0:
          answer = randomInt + randomInt2; // add
          break;
      case 1:
          answer = randomInt - randomInt2; // subtract
          break;
      case 2:
          answer = randomInt * randomInt2; // multiply
          break;
      case 3:
          answer = randomInt / randomInt2; //divide
  }

  const [input, setInput] = useState("");

  function answerInput(text) {
    setInput(text);

    const value = Number(text);

    if (value === answer) {
       generateRandom(Math.floor(Math.random() * 999));
       generateRandom2(Math.floor(Math.random() * 999));
       generateOperation(Math.floor(Math.random()* 3));
       setInput("");

    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        this is where the zetamac page will be {score} {randomInt} {randomInt2} {answer} {operation}
      </Text>
      <Button
        onPress={() => {
          console.log('You tapped the button!');
          generateRandom(Math.floor(Math.random() * 999));
          generateRandom2(Math.floor(Math.random() * 999));
          generateOperation();
         }}
       title="Press Me"
      />
      <TextInput 
        value={input}
        onChangeText={answerInput}
        
        style={styles.input}
      />
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

  input: {
    height: 40,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    backgroundColor: '#ffffff',
    color: '#000000',
  },

});
