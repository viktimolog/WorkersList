import React, { Component } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
  Text
} from 'react-native';

export default class Loader extends Component {
  render () {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#0000ff"/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '50%',
    alignSelf: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
})
