import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MapView, Marker } from 'expo';


class Mapa extends React.Component{
  render () {
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 11.2150265,
          longitude: -74.1885824,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
        showsMyLocationButton={true}
      >
      <MapView.Marker
        coordinate={{
          latitude: 11.228675,
          longitude: -74.170202
        }}
        image={require('../assets/pin.png')}
      />
      <MapView.Marker
        coordinate={{
          latitude: 11.213268,
          longitude: -74.188614
        }}
        image={require('../assets/pin.png')}
      />
      <MapView.Marker
        coordinate={{
          latitude: 11.230143,
          longitude: -74.210757
        }}
        image={require('../assets/pin.png')}
      />
      <MapView.Marker
        coordinate={{
          latitude: 11.243498,
          longitude: -74.187751
        }}
        image={require('../assets/pin.png')}
      />
      <MapView.Marker
        coordinate={{
          latitude: 11.226298,
          longitude: -74.185884
        }}
        image={require('../assets/pin.png')}
      />
    </MapView>
    )
  }
}

export default Mapa
