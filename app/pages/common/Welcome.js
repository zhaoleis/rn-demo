import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, Dimensions, Navigator, TouchableOpacity } from 'react-native'
import Login from './Login'

export default class Welcome extends Component {
  componentDidMount() {
    this.timer = setTimeout(() => {
      this.gotoNext()
    }, 1000)
  }

  componentWillUnmount() {
    this.timer && clearTimeout(this.timer)
  }

  onPress() {
    alert("我是Spike!");
  }

  gotoNext(type = 'Normal') {
    this.props.navigator.push({
      component: Login,
      passProps: {
        titleBaseHeight: 44,
        titleColor: '#004cb0',
        titleText: '登录',
        leftText: ''
      },
      rightText: '查询',
      type: type
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          审计管理信息平台
        </Text>
        <Text style={styles.subtitle}>
          CHINA COMMUNICATIONS CONSTRUCTION
        </Text>
        <Text style={styles.instructions}>
          版权所有 © 2015-2016 xxxxxx
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
