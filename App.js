import { StatusBar } from "expo-status-bar";

import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Button from "./src/components/Buttom";
import { styles } from "./app.styles";
import { currencies } from "./src/constants/currencies";
import { Input } from "./src/components/Input";
import { exchangeRateApi } from "./src/services/Api";
import { useState } from "react";
import { convertCurrency } from "./src/utils/convertCurrency";




export default function App() {
  const [amount, setAmount] = useState('')
  const [fromCurrency, setFromCurrency] = useState('')
  const [toCurrency, setToCurrency] = useState('BRL')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState('')
  const [exChangeRate, setExchangeRate] = useState('')

  async function fetchExchangeRate(){
   const data = await exchangeRateApi(fromCurrency)
   const rate = data.rates[toCurrency]
   const coverted = convertCurrency(amount, rate)
   setResult(coverted)

  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "height" : "padding"}
  
      style={styles.container}
    >
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <StatusBar style="light" />

          <View style={styles.header}>
            <Text style={styles.title}>Converso de Moedas</Text>
            <Text style={styles.subTitle}>Converta valores entre diferentes moedas</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.label}>De:</Text>

            <View style={styles.currencyGrid}>
                {currencies.map((currency) => (
                  <Button 
                    onPress={()=>setFromCurrency(currency.code)}
                    key={currency.code}
                    variant="primary"
                    currency={currency}
                    isSelect={fromCurrency === currency.code}
                  ></Button>
                ))}
           
            </View>
                <Input
                onChangeText={setAmount}
                value={amount} 
                label='valor'/>

                <TouchableOpacity style={styles.swapBottom}>
                  <Text style={styles.swapBottomText}>
                    ↑↓
                  </Text>
                </TouchableOpacity>

                <Text style={styles.label}>
                  para:
                </Text>
                <View style={styles.currencyGrid}>
                  {currencies.map((currency) => (
                  <Button
                    onPress={()=>setToCurrency(currency.code)}
                    key={currency.code}
                    variant="secondary"
                    currency={currency}
                    isSelect={toCurrency === currency.code}
                  ></Button>
                ))}

                </View>

          </View>

         <TouchableOpacity
         onPress={fetchExchangeRate}
         style={styles.convertBottom}>
          <Text style={styles.swapBottomText}>
            Converter
          </Text>
         </TouchableOpacity>


        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
