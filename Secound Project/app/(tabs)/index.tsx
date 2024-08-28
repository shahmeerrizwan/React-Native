import { Text, View } from "react-native";
import Button from "../Components/Button";
import { useState } from "react";


export default function HomeScreen() {

const[name,setName]=useState("Signup")

  return (
    <View>
  <Text style={{fontSize:30, textAlign:"center",top:80,fontWeight:700}}> Components</Text>
  <Button title={name} onPress={()=>{setName("Login")}} />
  </View>
  );
}

