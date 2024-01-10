import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>WelcomeScreen</Text>
      <Button title='Salir'/>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E6FBAD',
  }
})