import { StatusBar } from 'expo-status-bar';

import {  StyleSheet, Text, View } from 'react-native';
import Button from './src/components/Buttom';

export default function App() {
  return (
    <View >
      <StatusBar style='light'/>
      

      <View>
        <Text>Converso de Moedas</Text>
        <Text>Converta valores entre diferentes moedas</Text>
      </View>

      <View>
        <Text>De:</Text>
        <Button></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#554747ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
