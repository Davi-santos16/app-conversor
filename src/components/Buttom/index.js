import { Alert, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";


export default function Button({variant , onPress,  currency, isSelect}){
    return(
       <TouchableOpacity
       onPress={onPress}
       style={[styles.buttom,
        isSelect && (variant === 'primary' ? styles.buttomPrimary : styles.buttomSecundary)
       ]}>
        <Text style={styles.bottomText}>
         {currency.code}  
        </Text>
       </TouchableOpacity>
    )
}