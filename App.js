import React from 'react';
import { StyleSheet, Text, View, ScrollView, Platform } from 'react-native';
import { createMaterialTopTabNavigator,createBottomTabNavigator, createAppContainer, createStackNavigator, SafeAreaView } from 'react-navigation'
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs"
import Residuos from './componentes/residuos'
import Mapa from './componentes/mapa'
import Contenedores from './componentes/contenedores'
import EcoGreen from './componentes/ecoGreen'


class HomeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <Text>Pantalla de inicio</Text>
      </SafeAreaView>
    );
  }
}
const TabNavigator = createMaterialTopTabNavigator({
  Inicio: EcoGreen,
  Residuos: Residuos,
  Contenedores: Contenedores,
  Mapa: Mapa
},{
  initialRouteName: 'Inicio',
  tabBarPosition: 'bottom',
  tabBarOptions : {
    showIcon : false,
    fontSize: 12,
    style:{
      backgroundColor: 'green'
    }
  }
});

export default createAppContainer(TabNavigator);
