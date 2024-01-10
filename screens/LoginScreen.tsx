import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native'

//FIREBASE
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/Config';

export default function LoginScreen({ navigation }: any) {

 const [correo, setcorreo] = useState('')
 const [contrasenia, setcontrasenia] = useState('')
 const [loginPressed, setLoginPressed] = useState(false)

 function login() {
    signInWithEmailAndPassword(auth, correo, contrasenia)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        navigation.navigate("Drawer_Welcome")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode)
        console.log(errorMessage)

        switch(errorCode) {
          case "auth/invalid-credential":
            Alert.alert("ERROR", "Credenciales incorrectas")
            break;
          case "auth/missing-password":
            Alert.alert("ERROR", "Contraseña perdida")
            break;
          default:
            Alert.alert("ERROR")
       }

      });
 }

 return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        placeholder='Ingresar email'
        keyboardType='email-address'
        onChangeText = { (texto: any) => setcorreo(texto)}
        value={loginPressed ? '' : correo}
        style={styles.input}
      />

      <TextInput
        placeholder=" Ingresar contraseña"
        onChangeText = { (texto: any) => setcontrasenia(texto)}
        value={loginPressed ? '' : contrasenia}
        style={styles.input}
      />

      <Button title='Ingresar' onPress={() => {login(); setLoginPressed(true)}}/>

      <Text onPress={() => navigation.navigate('Registro')} style={styles.link}> 👉 Regístrate aquí 👈</Text>
    </View>
 )
}
const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B7E9FE',
 },
 title: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
 },
 input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    width: '80%',
 },
 link: {
    color: '#4682B4',
    textAlign: 'center',
    marginTop: 20,
 }
})