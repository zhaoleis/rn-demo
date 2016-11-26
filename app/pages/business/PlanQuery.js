import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, Dimensions, Navigator, TouchableOpacity } from 'react-native'
export default class PlanQuery extends Component {

  render() {
    const {text,left} = this.props
    return (
      <View style={[styles.container,{marginLeft:left}]}>
      <Text style={{fontSize:10,color:'#fff'}}>{text}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    zIndex: 10, 
    height: 18, 
    width: 18,
    borderRadius:9, 
    backgroundColor: 'red', 
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  }
})
