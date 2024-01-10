  import React, { useState } from 'react'
  import { TextInput, View, Text, StyleSheet, Button, Alert } from 'react-native'

  //FIREBASE
  import { createUserWithEmailAndPassword } from "firebase/auth";
  import { auth } from '../config/Config';

  export default function RegistroScreen( {navigation}: any ) {
  const [correo, setcorreo] = useState('')
  const [contrasenia, setcontrasenia] = useState('')

  function registro() {
      createUserWithEmailAndPassword(auth, correo, contrasenia)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;

          console.log("REGISTRO CORRECTO");
          navigation.navigate('Login')
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          
          console.log(errorCode)
          
          switch(errorCode) {
            case "auth/weak-password":
              Alert.alert("ERROR", "La contraseña debe poseer 6 caracteres")
              break;
            case "auth/invalid-email":
              Alert.alert("ERROR","El correo no es valido")
              break;
              case"auth/email-already-in-use":
              Alert.alert("ERROR","Este correo ya esta registrado")
              break;
            default:
              Alert.alert("ERROR")
        }
          
        });
  }

  return (
      <View style={styles.container}>
        <Text style={styles.title}>RegistroScreen</Text>
        <TextInput
          placeholder='Ingrese email'
          onChangeText={(texto) => setcorreo(texto)}
          style={styles.input}
        />
        <TextInput
          placeholder='Ingrese contraseña'
          onChangeText={(texto) => setcontrasenia(texto)}
          style={styles.input}
        />
        <TextInput 
          placeholder ="Ingrese un nick"
          style={styles.input}
        />
        <TextInput 
          placeholder="Edad"
          style={styles.input}
        />

        <Button title='Registrarse' onPress={()=> registro() }/>
      </View>
  )
  }

  const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#ADFBEE',
      alignItems: 'center',
      justifyContent: 'center',
  },
  title: {
      fontSize: 24,
      marginBottom: 20,
  },
  input: {
      width: '80%',
      height: 40,
      padding: 10,
      marginBottom: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 5,
  },
  button: {
      width: '80%',
      height: 40,
      marginTop: 20,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#007BFF',
      borderRadius: 5,
  },
  })