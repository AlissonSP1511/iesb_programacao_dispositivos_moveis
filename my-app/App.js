import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Biscoito from './componentes/Biscoito';
import Profile from './componentes/Semana04/Profile';
// import MeuComponente from './componentes/semana02/MeuComponente';
// import MeuComponente2 from './componentes/semana02/MeuComponente2';
// import MeuComponente3 from './componentes/semana02/MeuComponente3';
// import NumeroAleatorio from './componentes/Semana03/NumeroAleatorio';
// import Botao from './componentes/Semana03/botao';
// import Contador from './componentes/Semana03/Contador';
// import DigiteSeuNome from './componentes/Semana03/DigiteSeuNome';
// import Pai from './componentes/Semana04/ComunicacaoDireta/Pai';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <MeuComponente /> */}

      {/* <MinMax min="10" max="20" /> */}

      {/* <MeuComponente /> */}

      {/* <NumeroAleatorio min={1} max={60} /> */}

      {/* <Botao /> */}

      {/* <Contador /> */}

      {/* <DigiteSeuNome/> */}

      {/* <Pai/> */}

      {/* <Biscoito /> */}

      <Profile />

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