
import { Text, TextInput, View } from "react-native"
import {styles} from "./styles"

export function Input({value, onChangeText, label}){
    return(
        <View style={styles.container}>
            <Text style={styles.label}>
                {label}
            </Text>
                <TextInput
                    placeholder="0.00"
                    placeholderTextColor='#94a3b8'
                    style={styles.input}
                    value={value}
                    onChangeText={onChangeText}
                    keyboardType="numeric"
                /> 
        </View>
         
    )
}