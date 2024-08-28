import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import ExStyle from './Style'; 

export default function HomeScreen() {
  const [name, setName] = useState("Signup");
  const [inpValue, setInpValue] = useState<string>("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Components</Text>

      <TouchableOpacity style={styles.button} onPress={() => setName("Login")}>
        <Text style={styles.buttonText}>{name}</Text>
      </TouchableOpacity>

      <Text style={styles.inlineTitle}>Inline Style</Text>
      <Text style={styles.addStyle}>Internal Style</Text>
      <Text style={ExStyle.Externalstyle}>External Style</Text>
      
      <Text style={styles.nameText}>Your Name Is: {inpValue}</Text>
      <TextInput
        style={styles.inpStyle}
        value={inpValue}
        placeholder="Enter Your Name"
        onChangeText={(text) => setInpValue(text)}
      />
      <TouchableOpacity
        style={styles.clearButton}
        onPress={() => setInpValue("")}
      >
        <Text style={styles.buttonText}>Clear Input</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "700",
    marginBottom: 20,
  },
  inlineTitle: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "700",
    marginBottom: 20,
  },
  addStyle: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 30,
    backgroundColor: 'yellow',
    padding: 10,
    marginBottom: 20,
  },
  inpStyle: {
    fontSize: 18,
    color: "black",
    borderWidth: 2,
    padding: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  clearButton: {
    backgroundColor: '#FF0000',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  nameText: {
    fontSize: 20,
    marginTop:20,
    marginBottom: 20,
  },
});
