import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";


export const styles = StyleSheet.create({

    buttom:{
        backgroundColor: colors.inputBackground,
        paddingHorizontal: 16,
        paddingVertical:8,
        margin:4,
        borderRadius:8
    },
    bottomText:{
        color:colors.text,
        fontWeight: "500",
    },
    buttomPrimay:{
        backgroundColor:colors.primary
    },
    buttomSecundary:{
        backgroundColor:colors.secondary
    }
})