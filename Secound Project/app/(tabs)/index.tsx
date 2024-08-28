import { Text, View ,StyleSheet} from "react-native";
import Button from "../Components/Button";
import { useState } from "react";
import ExStyle from './Style'


export default function HomeScreen() {

const[name,setName]=useState("Signup")

  return (
    <View>
  <Text style={{fontSize:30, textAlign:"center",top:80,fontWeight:700}}> Components</Text>

  <Button title={name} onPress={()=>{setName("Login")}} />
   
    <Text style={{fontSize:30, textAlign:"center",top:80,fontWeight:700}}>Inline Style</Text>
    <Text style={Style.addStyle} >Internal Style</Text>
    <Text style={ExStyle.Externalstyle}>External Style</Text>
  </View>
  );
}

const Style=StyleSheet.create({
  addStyle:{
    top:90,
    textAlign:"center",
    fontWeight:"700",
    fontSize:30,
    backgroundColor:'yellow',
    padding:10
  }
})