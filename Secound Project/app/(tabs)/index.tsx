import { Text, View,  TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import styles from "./Style";

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
      <Text style={styles.Externalstyle}>External Style</Text>
      
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

