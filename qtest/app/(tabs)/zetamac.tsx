import { Text, View, StyleSheet, Button, TextInput } from "react-native";
import React, { useState, useEffect, useMemo } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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

  const generateProblem = () => {
       generateRandom(Math.floor(Math.random() * max));
       generateRandom2(Math.floor(Math.random() * max));
       generateOperation(Math.floor(Math.random()* 4));
  };


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
       generateProblem();
       setInput("");

    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.scoreText}>Score: {score}</Text>
    
      
    <View style={styles.problemBox}>
      <Text style={styles.problemText}>{randomInt}</Text>
    
      {operation === 0 && <Text style={styles.problemText}>+</Text>}
      {operation === 1 && <Text style={styles.problemText}>−</Text>}
      {operation === 2 && <Text style={styles.problemText}>×</Text>}
      {operation === 3 && <Text style={styles.problemText}>÷</Text>}
    
      <Text style={styles.problemText}>{randomInt2}</Text>
    </View>
    
      <TextInput
        value={input}
        onChangeText={answerInput}
        style={styles.input}
      />
    
      <View style={styles.mainButton}>
        <Button
          title="Press Me"
          onPress={() => {
            console.log('You tapped the button!');
            generateProblem();
            console.log('this is the operation'+ operation + 'and this is the answer' + answer);
          }}
        />
      </View>
    
      <View style={styles.difficultyContainer}>
        <View style={styles.diffButton}>
          <Button title="Beginner" onPress={() => setDifficulty(0)} />
        </View>
        <View style={styles.diffButton}>
          <Button title="Decent" onPress={() => setDifficulty(1)} />
        </View>
        <View style={styles.diffButton}>
          <Button title="Advanced" onPress={() => setDifficulty(2)} />
        </View>
        <View style={styles.diffButton}>
          <Button title="Hell" onPress={() => setDifficulty(3)} />
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    alignItems: "center",
    paddingTop: 60,
    paddingHorizontal: 24,
  },

  scoreText: {
    color: "#e5e7eb",
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 20,
  },

  problemBox: {
    backgroundColor: "#020617",
    paddingVertical: 28,
    paddingHorizontal: 36,
    borderRadius: 18,
    marginBottom: 24,
    minWidth: "80%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },

  problemText: {
    color: "#f8fafc",
    fontSize: 36,
    fontWeight: "700",
    letterSpacing: 1,
  },

  input: {
    width: "80%",
    height: 52,
    borderRadius: 14,
    backgroundColor: "#ffffff",
    fontSize: 20,
    textAlign: "center",
    color: "#000000",
    marginBottom: 20,
  },

  mainButton: {
    width: "80%",
    borderRadius: 14,
    overflow: "hidden",
    marginBottom: 30,
  },

  difficultyContainer: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 12,
  },

  diffButton: {
    width: "48%",
    borderRadius: 12,
    overflow: "hidden",
  },
});

