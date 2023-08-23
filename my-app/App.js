
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MeuComponente from './componentes/MeuComponente';
import MinMax 



export default function App() {
  return (
     <View styles={styles.container}>
      <MeuComponente/>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
