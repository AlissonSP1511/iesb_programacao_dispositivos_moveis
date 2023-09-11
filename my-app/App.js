import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MeuComponente from './componentes/Semana01/MeuComponente';
import MinMax from './componentes/Semana01/MinMax';

// import MeuComponente from './componentes/Semana02/MeuComponente';
import MeuComponente2 from './componentes/Semana02/MeuComponente2';
import MeuComponente3 from './componentes/Semana02/MeuComponente3';

import Familia from './componentes/Semana03/children/Familia';
import Filho from './componentes/Semana03/children/Filho';

import Pai from './componentes/Semana03/cominicacao-direta/Pai';
// import Filho from './componentes/Semana03/cominicacao-direta/Filho';

// import Filho from './componentes/Semana03/comunicacao-indireta/Filho';
// import Pai from './componentes/Semana03/comunicacao-indireta/Pai';

import Botao from './componentes/Semana03/Botao';
import ComponenteControlado from './componentes/Semana03/ComponenteControlado';
import Contador from './componentes/Semana03/Contador';
import DigiteSeuNome from './componentes/Semana03/DigiteSeuNome';
import ExercicioNumeroAleatório from './componentes/Semana03/ExercicioNumeroAleatório';
import NumeroAleatorio from './componentes/Semana03/NumeroAleatorio';

import IntroducaoEstilos from './componentes/Semana04/IntroducaoEstilos';
import ParOuImpar from './componentes/Semana04/ParOuImpar';

import Biscoito from './componentes/Biscoito';
import Profile from './componentes/Profile';
export default function App() {
  return (
    <View style={styles.container}>
      {/* <MeuComponente /> */}

      {/* <MeuComponente2 /> */}

      {/* <MeuComponente3 /> */}

      {/* <NumeroAleatorio min={1} max={60} /> */}

      {/* <Botao /> */}

      {/* <ComponenteControlado /> */}

      {/* <Contador /> */}

      {/* <DigiteSeuNome /> */}

      {/* <ExercicioNumeroAleatório min={1} max={60}/> */}

      {/* <Familia /> */}

      {/* <Pai /> */}

      {/* <Filho /> */}

      {/* <MinMax min="10" max="20" /> */}

      {/* <NumeroAleatorio min={1} max={60} /> */}

      {/* <Biscoito /> */}

      <Profile />

      {/* <ParOuImpar /> */}

      {/* <IntroducaoEstilos /> */}

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