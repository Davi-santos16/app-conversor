import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";


export default function Button(){
    return(
       <TouchableOpacity style={styles.buttom}>
        <Text style={styles.bottomText}>
           Clique aqui 
        </Text>
       </TouchableOpacity>
    )
}