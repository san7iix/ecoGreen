import React from 'react'
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native'
import {createBottomTabNavigator, createAppContainer, createStackNavigator} from 'react-navigation';

class EcoGreen extends React.Component {
  static navigationOptions = {
    title: 'ecoGreen'
  }
  render() {
    return (<ScrollView style={stilos.contenedor}>
      <Image source={require('../assets/Logo.png')} style={stilos.size}/>
      <Text style={stilos.textoG}>¿Qué es ecoGreen?</Text>
      <Text>
        Ecogreen es una aplicación que tiene como finalidad ayudar e informar sobre cómo manejamos los residuos, además de mostrarnos los diversos contenedores con los cuales cuentan los centros de recolección.Además de brindarnos información sobre cómo manejar estos residuos, nos muestra puntos de reciclaje ubicados en la ciudad de santa Marta Ayúdanos a mejorar nuestro media ambiente con ecogreen.</Text>
    </ScrollView>)
  }
}

const stilos = StyleSheet.create({
  imagen: {
    borderRadius: 10
  },
  size: {
    width: 200,
    height: 200
  },
  contenedor: {
    flex: 1,
    padding: 40,
    paddingVertical: 0
  },
  textoG: {
    fontSize: 50,
    fontFamily: "Roboto"
  }
});

const HomeStack = createStackNavigator({Inicio: EcoGreen});

export default createAppContainer(HomeStack);
