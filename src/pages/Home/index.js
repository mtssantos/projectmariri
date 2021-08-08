import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function Home() {
    const navigation = useNavigation();
    function handletoSingIn() {
       navigation.navigate('Sing in') 
    }
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.title}>Bem vindo ao nosso app!</Text>
            <Text style={styles.subtitle}>O que você precisa fazer hoje?</Text>
        </View>
        <TouchableOpacity style={styles.buttonadd}>
            <View style={styles.buttonIcon}>
              <Text>
                <Ionicons name="add" color="#000" size={24} />
              </Text>
            </View>
            <Text style={styles.buttonText}>
              Cadastrar novo Mariri
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonnav}>
            <View style={styles.buttonIcon}>
              <Text>
                <Ionicons name="md-navigate-outline" color="#000" size={24} />
              </Text>
            </View>
            <Text style={styles.buttonText}>
              Procurar Mariris Cadastrados
            </Text>
        </TouchableOpacity>
        <View style={styles.textfooter}>
            <TouchableOpacity onPress={handletoSingIn} style={styles.textaccess}>
                <Text>Acessar Sistema</Text>
            </TouchableOpacity>
        </View>
          { /* <TouchableOpacity style={styles.button} onPress={handletoSingIn}>
              <Text style={styles.textbutton}>Ir até Sing In</Text>
          </TouchableOpacity> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    marginHorizontal: 35,
  },
  title: {
    marginTop: 220,
    fontWeight: 'bold',
    fontSize: 16,
    
  }, 
  subtitle: {
    marginTop: 8,
    fontSize: 16
  }, 
  buttonadd: {
    backgroundColor: '#b8b8b8',
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 8,
    marginHorizontal: 35,
    marginTop: 100,
    display: 'flex'
  },
  icons: {
    margin: 10,
    fontWeight: 'bold',
  },  
  button:{
      backgroundColor: '#000',
      width: 150,
      height: 50,
      borderRadius: 5
  },
  textbutton: {
      color: '#fff',
      marginHorizontal: 29,
      marginVertical: 12
  },
  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000',
  },
  buttonnav: {
    backgroundColor: '#b8b8b8',
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 35,

  },
  textfooter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  textaccess: {
    marginRight: 15,
  }
});
