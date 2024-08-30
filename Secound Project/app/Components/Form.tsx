import { useState } from "react"
import { Text, TextInput, TouchableOpacity, View } from "react-native"

export default function Form() {
const [userName,setUserName]=useState("")
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")


  return (
    <>
      <View>
<Text>User Form</Text>
<TextInput placeholder="Enter Your Name" onChangeText={(text)=>{setUserName(text)}}/>
<TextInput placeholder="Enter Your Email" onChangeText={(text)=>{setEmail(text)}}/>
<TextInput placeholder="Enter Your Password" onChangeText={(text)=>{setPassword(text)}}/>

<TouchableOpacity>
    <Text></Text>
</TouchableOpacity>
        </View>
    </>
  )
}
