import { useState } from "react"
import { Text, View } from "react-native"

export default function Form() {
const [userName,setUserName]=useState("")
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")


  return (
    <>
      <View>
<Text>User Form</Text>

        </View>
    </>
  )
}
