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
  NativeModules,
  findNodeHandle,
} from 'react-native';

import ToastDroid from './ToastDroid';
import MapView from './MapView';

const MapViewComponent = NativeModules.MapView;
const UIManager = NativeModules.UIManager;

export default class HereMapsRN extends Component {

  onZoomInPress = () => {
    UIManager.dispatchViewManagerCommand(
        findNodeHandle(this),
        UIManager.MapView.Commands.zoomOut,
        [15] );
  }

  onZoomOutPress = () => {
    UIManager.dispatchViewManagerCommand(
        findNodeHandle(this),
        UIManager.MapView.Commands.zoomOut,
        [5] );
  }

  onButtonPress = () => {
    ToastDroid.show('Button has been pressed!', ToastDroid.SHORT);
  };

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
            onPress={this.onZoomInPress} />

          <Button
            title="-"
            onPress={this.onZoomOutPress} />
          <Button

            title="o"
            onPress={this.onButtonPress} />

        </View>

      </MapView>
    );
  }
}



AppRegistry.registerComponent('HereMapsRN', () => HereMapsRN);
