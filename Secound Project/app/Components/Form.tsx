import { useState } from "react";
import {
    StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Form() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [display, setDisplay] = useState(false);

  const clearDetail = () => {
    setDisplay(false);
    setEmail("");
    setPassword("");
    setUserName("");
  };

  return (
    <>
      <View>
        <Text style={Style.title}>User Form</Text>
        <TextInput
        style={Style.input}
          placeholder="Enter Your Name"
          value={userName}
          onChangeText={(text) => {
            setUserName(text);
          }}
        />
        <TextInput
        style={Style.input}
          placeholder="Enter Your Email"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
          }}
        />
        <TextInput
        style={Style.input}
          placeholder="Enter Your Password"
          value={password}
          secureTextEntry={true}
          onChangeText={(text) => {
            setPassword(text);
          }}
        />

        <TouchableOpacity
          onPress={() => {
            setDisplay(true);
          }}
          style={Style.button}
        >
          <Text style={Style.buttonText}>Print Details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Style.button} onPress={clearDetail}>
          <Text style={Style.buttonText}>Clear Details</Text>
        </TouchableOpacity>

        <View>
          <Text style={Style.title}>Detailed</Text>
          {display ? (
            <View>
              <Text>User Name is : {userName}</Text>
              <Text>User Email is : {email}</Text>
              <Text>User Password is : {password}</Text>
            </View>
          ) : null}
        </View>
      </View>
    </>
  );
}



const Style = StyleSheet.create({
    input:{
        margin:10,
        padding:10,
        borderColor:"black",
       borderWidth:2,
       fontSize:20
    },
    title: {
        fontSize: 30,
        textAlign: "center",
        fontWeight: "700",
        marginBottom: 20,
    },
    button:{
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        alignItems: "center",
    borderColor:"black",
backgroundColor:"green"
},
buttonText:{
color:"white"
}
})