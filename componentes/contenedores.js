import React from 'react'
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native'
import {createBottomTabNavigator, createAppContainer, createStackNavigator} from 'react-navigation';

class Contenedores extends React.Component {
  static navigationOptions = {
    title: 'ecoGreen'
  }
  render() {
    return (<ScrollView style={stilos.contenedor}>
      <Text style={stilos.textoG}>Envases de vidrio</Text>
      <Image source={require('../assets/contenedores/verde.png')} style={stilos.size}/>

      <Text style={stilos.textoG}>Desechos peligrosos</Text>
      <Image source={require('../assets/contenedores/rojo.png')} style={stilos.size}/>

      <Text style={stilos.textoG}>Papel y cartón</Text>
      <Image source={require('../assets/contenedores/aguaM.png')} style={stilos.size}/>

      <Text style={stilos.textoG}>Envases plásticos y metálicos</Text>
      <Image source={require('../assets/contenedores/amarillo.png')} style={stilos.size}/>

      <Text style={stilos.textoG}>Desechos en general</Text>
      <Image source={require('../assets/contenedores/gris.png')} style={stilos.size}/>

      <Text style={stilos.textoG}>Orgánicos</Text>
      <Image source={require('../assets/contenedores/naranja.png')} style={stilos.size}/>

    </ScrollView>)
  }
}

const stilos = StyleSheet.create({
  imagen: {
    borderRadius: 10,
    alignSelf: 'center'
  },
  size: {
    width: 200,
    height: 200
  },
  contenedor: {
    flex: 1,
    paddingVertical: 0,
    paddingLeft: 100
  },
  textoG: {
    fontSize: 23,
    fontFamily: "Roboto"
  }
});

const HomeStack = createStackNavigator({Inicio: Contenedores});

export default createAppContainer(HomeStack);
