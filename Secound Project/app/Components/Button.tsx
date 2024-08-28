import { View, Button } from "react-native";


export default function ButtonComponent(props: { title: string;onPress:any }) {
  // const alert = () => {
  //   console.warn("Function Call Sucessfully");
  // };

  return (
    <View>
      <Button onPress={props.onPress} color={'red'} title={props.title}  />
    </View>
  );
}