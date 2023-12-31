import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function Biscoito() {

  const [frase, setFrase] = useState("");
  const [quebrado, setQuebrado] = useState(false);

  const frases = [
    "''Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.''",
    "''Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.''",
    "''Aquele que se importa com o sentimento dos outros, não é um tolo.''",
    "''Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.''",
    "''Quem olha para fora sonha; quem olha para dentro acorda.''",
    "''A maior barreira para o sucesso é o medo do fracasso.''",
    "''A inspiração vem dos outros. A motivação vem de dentro de nós.''",
    "''Realize o óbvio, pense no improvável e conquiste o impossível.''",
    "''O que importa é o que importa.''",
    "''Não compense na ira o que lhe falta na razão.''",
  ];

  const quebrarBiscoito = () => {
    if (!quebrado) {
      const randomIndex = Math.floor(Math.random() * frases.length);
      setFrase(frases[randomIndex]);
      setQuebrado(true);
    }
  };

  const reiniciarBiscoito = () => {
    setFrase("");
    setQuebrado(false);}

  return (
    <View style={styles.container}>
      {quebrado ? (
        <Image
          style={styles.imagem}
          source={require("../assets/biscoitoquebrado.png")}
        />
      ) : (
        <Image
          style={styles.imagem}
          source={require("../assets/biscoitointeiro.png")}
        />
      )}
      <View style={styles.container}>
        <Text style={styles.textofrase}>{frase}</Text>
      </View>
      <View style={styles.botaobox}>
      <TouchableOpacity
        onPress={quebrarBiscoito}
        style={styles.botao}
        disabled={quebrado}
      >
        <Text style={{ color: "#e39731" }}>Quebrar o Biscoito</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={reiniciarBiscoito}
        style={styles.botao}
        disabled={!quebrado}
      >
        <Text style={{ color: "#e39731" }}>Reiniciar o Biscoito</Text>
      </TouchableOpacity>

      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  texto: {
    fontSize: 30,
    color: "white",
  },

  textofrase: {
    fontSize: 30,
    fontStyle: "italic",
    color: "orange",
  },

  imagem: {
    left: 20,
    right: 0,
    top: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },

  botao: {
    marginTop: 50,
    padding:20,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#e39731",
  },

  botaobox: {
    flex: 1,
  },
});