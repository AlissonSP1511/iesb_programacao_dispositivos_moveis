
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MeuComponente from './componentes/MeuComponente';
import MinMax from './componentes/MinMax';



export default function App() {
  return (
     <View style={styles.container}>
      <MinMax Min ='20' Max ='40' />
     </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
