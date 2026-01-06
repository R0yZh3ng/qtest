import { Text, View, StyleSheet, Button, TextInput } from "react-native";
import React, { useState, useEffect, useMemo } from "react";

export default function Zetamac() {
  const [score, setScore] = useState(0);

  const [level, setDifficulty] = useState(0);

  const max = useMemo(() => {
    switch (level) {
      case 0:
          return 21;
      case 1:
          return 100;
      case 2:
          return 1000;
      default:
          return 9999;
    }
  }, [level]);

  const [randomInt, generateRandom] = useState(Math.floor(Math.random() * max));
  const [randomInt2, generateRandom2] = useState(Math.floor(Math.random() * max));
  const [operation, generateOperation] = useState(Math.floor(Math.random() * 4));

 
  const answer = useMemo(() => { //note to self that useMemo is a hook that recalculates when one of the independent variables change
   switch (operation) {
      case 0:
          return randomInt + randomInt2; // add
      case 1:
          return randomInt - randomInt2; // subtract
      case 2:
          return randomInt * randomInt2; // multiply
      case 3:
          return randomInt / randomInt2; //divide
   }
  }, [randomInt, randomInt2, operation]);
 

  const [input, setInput] = useState("");

  function answerInput(text) {
    setInput(text);

    const value = Number(text);

    if (value === answer) {
       setScore(score + 1);
       generateRandom(Math.floor(Math.random() * max));
       generateRandom2(Math.floor(Math.random() * max));
       generateOperation(Math.floor(Math.random()* 4));
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
          generateRandom(Math.floor(Math.random() * max));
          generateRandom2(Math.floor(Math.random() * max));
          generateOperation(Math.floor(Math.random() * 4));
          console.log('this is the operation'+ operation + 'and this is the answer' + answer);
         }}
       title="Press Me"
      />
      <TextInput 
        value={input}
        onChangeText={answerInput}
        
        style={styles.input}
      />

      <Button
        onPress={() => {
          console.log('difficulty changed');
          setDifficulty(0);
        }}
        title = "beginner"/>
      <Button
        onPress={() => {
          console.log('difficulty changed to 1');
          setDifficulty(1);
        }} 
        title = "decent"/>
      <Button
        onPress={() => {
          console.log('difficulty changed to 2');
          setDifficulty(2);
        }}
        title = "advanced"/>
      <Button
        onPress={() => {
          console.log('difficulty changed to 3');
          setDifficulty(3);
        }}
        title = "Hell"/>

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
