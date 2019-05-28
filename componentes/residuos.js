import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';



class Residuos extends React.Component{
  static navigationOptions = {
    title : 'ecoGreen'
  }
  render () {
    return (
      <ScrollView style={stilos.contenedor}>
        <Text style={[stilos.textoG,stilos.margenA]}>¿Es lo mismo basura que residuo?</Text>
        <Text>El crecimiento de la población, el sobreconsumo y una cultura de producción que privilegia lo desechable por sobre lo retornable, han transformado a la basura en uno de los principales problemas ambientales y de contaminación existentes. Un cambio de la mirada desde el concepto de basura al de residuo clasificable y reutilizable, puede encaminarnos a minimizar el problema.</Text>

        <Text style={stilos.textoG}>¿Cómo se clasifican los residuos?</Text>
        <Text>-Fuente de origen (domiciliarios, industriales, hospitalarios, de construcción).</Text>
        <Text>-Biodegradabilidad (orgánicos e inorgánicos).</Text>
        <Text>-Composición (para efectos de manejo).</Text>

        <Text style={[stilos.textoG,stilos.margenA]}>Clasificación según su origen</Text>
        <Text style={stilos.margenA}><Text style={stilos.textoM}>-Residuos domiciliarios: </Text> Residuos resultantes de las actividades diarias de un hogar, que comúnmente se denomina “basura”. Estos incluyen diversos materiales como: papeles y cartones, vidrios, plásticos, restos de alimentos, telas; como también otros de mayor peligrosidad: envases con restos de diluyentes, pinturas, pesticidas e insecticidas de uso casero. En esta categoría se incluyen también los residuos generados en las oficinas y establecimientos educacionales, así como los residuos de los locales comerciales y restaurantes.</Text>

        <Text style={stilos.margenA}><Text style={stilos.textoM}>-Residuos municipales: </Text> Están compuestos, principalmente, de los materiales resultantes de la limpieza de calles, el retiro de basuras provenientes de las ferias libres y de los residuos resultantes de las podas con fines de mantención de parques y jardines. Esta categorización no incluye los residuos recolectados desde las viviendas (domiciliarios).</Text>

        <Text style={stilos.margenA}><Text style={stilos.textoM}>-Residuos sólidos industriales: </Text> está compuesto por cualquier material que sea descartado de un proceso industrial o semi-industrial. No incluye los residuos que resultan de las actividades administrativas o de la preparación de alimentos de un casino de una planta industrial.</Text>


        <Text style={stilos.margenA}><Text style={stilos.textoM}>-Residuos hospitalarios: </Text>Tipo de residuos de carácter muy especial dada la naturaleza de las actividades que se desarrollan en los establecimientos hospitalarios. Entre otros, se cuentan los residuos de tipo infeccioso, material médico quirúrgico, elementos corto punzantes, restos de tejidos humanos, restos de fármacos. Considerando las características especiales de estos residuos, ellos reciben un tratamiento específico.</Text>

        <Text style={stilos.margenA}><Text style={stilos.textoM}>-Residuos de construcción: </Text>Son los residuos resultantes de las actividades de construcción que por lo general no representan un problema desde el punto de vista sanitario, ya que son prácticamente inertes. Sin embargo, estos se generan en grandes volúmenes, dificultando su manejo y disposición final.</Text>


        <Text style={[stilos.textoG,stilos.margenA]}>Clasificación según su biodegrabilidad</Text>
        <Text style={stilos.margenA}><Text style={stilos.textoM}>-Residuos orgánicos: </Text>Están compuestos por materias derivadas de vegetales, animales y comestibles, los cuales se descomponen con facilidad y vuelven a la tierra. Por ejemplo: frutas y verduras, restos de comidas, papeles.</Text>

        <Text style={stilos.margenA}><Text style={stilos.textoM}>-Residuos inorgánicos: </Text>son aquellos residuos que no están compuestos por elementos orgánicos. Se componen de desechos como latas, botellas, metales, plásticos y otros productos de uso cotidiano de origen industrial, los cuales tardan mucho tiempo en desintegrarse o nunca se descomponen, y por ello se les llama no biodegradables.</Text>


        <Text style={[stilos.textoG,stilos.margenA]}>Clasificación según su composición</Text>
        <Text style={stilos.textoM}>-Papeles y cartones.</Text>
        <Text style={stilos.textoM}>-Vidrios.</Text>
        <Text style={stilos.textoM}>-Chatarra y metal.</Text>
        <Text style={stilos.textoM}>-Pinturas y aceites.</Text>
        <Text style={stilos.textoM}>-Plástico.</Text>
        <Text style={stilos.textoM}>-Baterías y pilas.</Text>

      </ScrollView>
    )
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
    padding: 20,
    paddingVertical: 0
  },
  textoG: {
    fontSize: 30,
    fontFamily: "Roboto"
  },
  textoM:{
    fontSize:20
  },
  margenA:{
    marginTop:20
  }
});

const HomeStack = createStackNavigator(
  {
    Inicio: Residuos
  }
);

export default createAppContainer(HomeStack);
