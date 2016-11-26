import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, Dimensions, Navigator, TouchableOpacity } from 'react-native'
import Login from './Login'

export default class Main extends Component {
  componentDidMount() {
  }

  onPress() {
    alert("我是Spike!");
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          1232222
        </Text>
        <Text style={styles.subtitle}>
          fasdsdsadasd
        </Text>
        <Text style={styles.instructions}>
          sadasss
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    margin: 5,
  },
  subtitle: {
    color: '#333333',
    textAlign: 'center',
    fontSize: 12,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    position: 'absolute',
    bottom: 10,
    width: Dimensions.get('window').width
  },
})
