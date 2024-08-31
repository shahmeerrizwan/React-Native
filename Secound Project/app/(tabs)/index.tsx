import { Text, View,  TextInput, TouchableOpacity,FlatList } from "react-native";
// import { useState } from "react";
import styles from "./Style";
// import Form from "../Components/Form";

export default function HomeScreen() {
  // const [name, setName] = useState("Signup");
  // const [inpValue, setInpValue] = useState<string>("");

const users =[
  {
    name:"Shahmeer",
    age:19
  },{
    name:"Abdullah",
    age:20
  },{
    name:"Talha",
    age:21
  },{
    name:"Adnan",
    age:22
  },
]

  return (
    // <View style={styles.container}>
    //   <Text style={styles.title}>Components</Text>

    //   <TouchableOpacity style={styles.button} onPress={() => setName("Login")}>
    //     <Text style={styles.buttonText}>{name}</Text>
    //   </TouchableOpacity>

    //   <Text style={styles.inlineTitle}>Inline Style</Text>
    //   <Text style={styles.addStyle}>Internal Style</Text>
    //   <Text style={styles.Externalstyle}>External Style</Text>
      
    //   <Text style={styles.nameText}>Your Name Is: {inpValue}</Text>
    //   <TextInput
    //     style={styles.inpStyle}
    //     value={inpValue}
    //     placeholder="Enter Your Name"
    //     onChangeText={(text) => setInpValue(text)}
    //   />
    //   <TouchableOpacity
    //     style={styles.clearButton}
    //     onPress={() => setInpValue("")}
    //   >
    //     <Text style={styles.buttonText}>Clear Input</Text>
    //   </TouchableOpacity>

    //   <Form/>
    // </View>

    <View>
<Text style={styles.listText}>FLAT LIST </Text>
<FlatList  data={users}  
renderItem={({item})=>
  <Text style={styles.list}>{item.name}</Text>
}
/>
    </View>
  );
}

