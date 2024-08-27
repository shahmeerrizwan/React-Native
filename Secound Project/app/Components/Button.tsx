import { View, Button } from "react-native";

export default function ButtonComponent() {
  const alert = () => {
    console.warn("Function Call Sucessfully");
  };

  return (
    <View>
      <Button onPress={alert} color={'red'} title="Login"></Button>
    </View>
  );
}
