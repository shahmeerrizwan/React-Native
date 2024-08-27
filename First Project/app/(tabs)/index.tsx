import { View,Text, Button } from "react-native";


export default function HomeScreen() {

const name = "Muhammad Shah";
let age = 19;
var fName = "Rizwan Ahmed"
 
function myFunc() {
  return "My First App"
}

  return (
    <View>
    <Text style={{fontSize:30, top:60}}>My First Android App</Text>
    <Text style={{fontSize:25, top:60}}>MUHAMMAD SHAHMEER RIZWAN</Text>
    <Text style={{fontSize:25, top:60}}>{name}</Text>
    <Text style={{fontSize:25, top:60}}>{age}</Text>
    <Text style={{fontSize:25, top:60}}>{fName}</Text>
    <Text style={{fontSize:25, top:60}}>{myFunc()}</Text>
    <Text style={{fontSize:25, top:60}}>{age>=18?"You Are 18+":"You Are Not 18+"}</Text>

<Button  title="Press Here"></Button>
    
     </View>
  );
}
