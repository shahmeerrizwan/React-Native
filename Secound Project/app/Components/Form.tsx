import { useState } from "react";
import {
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
        <Text>User Form</Text>
        <TextInput
          placeholder="Enter Your Name"
          onChangeText={(text) => {
            setUserName(text);
          }}
        />
        <TextInput
          placeholder="Enter Your Email"
          onChangeText={(text) => {
            setEmail(text);
          }}
        />
        <TextInput
          placeholder="Enter Your Password"
          onChangeText={(text) => {
            setPassword(text);
          }}
        />

        <TouchableOpacity
          onPress={() => {
            setDisplay(true);
          }}
        >
          <Text>Print Details</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Clear Details</Text>
        </TouchableOpacity>

        <View>
          <Text>Detailed</Text>
          {display ? (
            <View>
              <Text>User Name is :{userName}</Text>
              <Text>User Email is :{email}</Text>
              <Text>User Password is :{password}</Text>
            </View>
          ) : null}
        </View>
      </View>
    </>
  );
}
