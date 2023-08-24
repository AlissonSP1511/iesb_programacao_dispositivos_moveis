
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MeuComponente from './componentes/Semana01/MeuComponente';
import MinMax from './componentes/Semana01/MinMax';
import NumeroAleatorio from './componentes/Semana02/ExercicioNumeroAleatório';



export default function App() {
  return (
     <View style={styles.container}>
      {/* <MinMax Min = {20} Max = {40} /> */}
      <NumeroAleatorio min={1} max={100} />
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
