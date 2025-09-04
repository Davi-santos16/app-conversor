import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";




export const styles = StyleSheet.create({
    container:{
        marginTop:10,
    },
    label:{
        color:colors.textSecondary,
        marginBottom: 4,
        fontSize: 15,
    },
    input:{
        backgroundColor: colors.inputBackground,
        color: colors.text,
        fontSize:20,
        fontWeight:"bold",
        padding:20,
        borderRadius:6,
        marginBottom:10,
     

    }
    
})