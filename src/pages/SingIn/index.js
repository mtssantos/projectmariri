import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function SingIn() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <Text style={styles.title}>Entrar no sistema</Text>
      </View>
      <View style={styles.form}>
          <Text style={styles.acesso}>Acesso:</Text>
          <TextInput  style={styles.inputaccess}/>
          <Text style={styles.password}>Senha:</Text>
          <TextInput keyboardType="numeric" secureTextEntry={true} style={styles.inputpass}/>
          <View style={styles.upload}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.textbutton}>Entrar</Text>
            </TouchableOpacity>
          </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
  header: {
    marginTop: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
      fontWeight: 'bold',
      fontSize: 16,
  },
  form: {
      marginTop: 20,
  },
  acesso: {
      fontSize: 14,
      fontWeight: 'bold',
      marginHorizontal: 25,
  },
  inputaccess: {
      borderStyle: 'solid',
      width: 360,
      fontSize: 14,
      borderWidth: 1.5,
      marginHorizontal: 25,
      marginTop: 8,
      padding: 8
  },
  password: {
    fontSize: 14,
    fontWeight: 'bold',
    marginHorizontal: 25,
    marginTop: 15,
  },
  inputpass: {
    borderStyle: 'solid',
    width: 360,
    fontSize: 14,
    borderWidth: 1.5,
    marginHorizontal: 25,
    marginTop: 8,
    padding: 8
  },
  upload: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',

  },
  button: {
      backgroundColor: '#b8b8b8',
      width: 150,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5

  },
  textbutton: {
      fontWeight: 'bold',
      fontSize: 14,
  }
});
