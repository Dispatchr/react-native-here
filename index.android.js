/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Alert,
  StyleSheet,
  Text,
  Button,
  View,
  NativeModules
} from 'react-native';

import ToastDroid from './ToastDroid';
import MapView from './MapView';

const MapViewComponent = NativeModules.MapView;

export default class HereMapsRN extends Component {

  render() {
    return (
      <MapView
        style={{flex : 1, backgroundColor: 'yellow'}}
        center="37.615223,-122.431297"
        mapType="normal"
        initialZoom={11} >

        <View style={{ position:'absolute', top: 10, right: 10,
                       width: 50, height: 120,
                       justifyContent: 'space-between', zIndex:1 }}>

          <Button
            title="+"
            onPress={onZoomInPress} />

          <Button
            title="-"
            onPress={onZoomOutPress} />

          <Button
            title="o"
            onPress={onButtonPress} />

        </View>

      </MapView>
    );
  }
}

const onZoomInPress = () => {
  MapViewComponent.zoom(10);
  ToastDroid.show('Button has been pressed!', ToastDroid.SHORT);
}

const onZoomOutPress = () => {
  MapViewComponent.zoom(20);
  ToastDroid.show('Button has been pressed!', ToastDroid.SHORT);
}

const onButtonPress = () => {
  ToastDroid.show('Button has been pressed!', ToastDroid.SHORT);
};

AppRegistry.registerComponent('HereMapsRN', () => HereMapsRN);
