import { Text, View } from "react-native";
import { currencies } from "../../constants/currencies";
import { styles } from "./styles";


export default function ResultCard ({exChangeRate,result,fromCurrencyy,toCurrency}){

    if(!result || !exChangeRate) return null


    const toSymbol = currencies.find(currency => currency.code === toCurrency).symbol
    return(
        <View style={styles.container}>
            <Text style={styles.label}>Resultado:</Text>
            <Text style={styles.amount}>{toSymbol}{result}</Text>
            <Text style={styles.label}>
                Taxa de cambio 1:{fromCurrencyy} = {exChangeRate.toFixed(4)} {toCurrency}
            </Text>

        </View>
    )
}