import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Filho from './Filho'

export default function Pai() {
  return (
    <View>
      <Filho nome="João" sobreNome="Silva"/>
    </View>
  )
}

const styles = StyleSheet.create({})