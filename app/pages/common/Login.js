import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, AsyncStorage, TextInput, TouchableOpacity, Dimensions, Image } from 'react-native'
import Button from 'antd-mobile/lib/button'
import WingBlank from 'antd-mobile/lib/wing-blank'
import Main from './Main'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      uname: '',
      upass: '',
    }
  }

  componentDidMount() {
    const callBack = (uInfo) => {
      if (uInfo) {
        const _uInfo = JSON.parse(uInfo)
        this.setState({
          uname: _uInfo.uname,
          upass: _uInfo.upass
        })
      }
    }
    this.getStorage('uInfo', callBack)
  }

  getStorage(AsyncStorageKey, callBack) {
    AsyncStorage.getItem(AsyncStorageKey, (error, text) => {
      if (text === null) {
        console.log(AsyncStorageKey + "没有对应的值")
      } else {
        callBack(text)
      }
    })
  }

  setStorage(AsyncStorageKey, text) {
    AsyncStorage.setItem(AsyncStorageKey, text, (error) => {
      console.log(text, AsyncStorageKey, error)
    })
  }

  unameChange(text) {
    this.setState({
      uname: text
    })
  }

  upassChange(text) {
    this.setState({
      upass: text
    })
  }

  onLogin() {
    const {uname, upass} = this.state
    const uInfo = { uname, upass }
    this.setStorage('uInfo', JSON.stringify(uInfo))
    this.gotoNext()
  }

  gotoNext(type = 'Normal') {
    this.props.navigator.push({
      component: Main,
      passProps: {
        titleBaseHeight: 44,
        titleColor: '#004cb0',
        titleText: '中交审计管理',
        leftText: '李辉'
      },
      onPress:this.gotoLogin.bind(this),
      rightText: '退出',
      type: type
    })
  }

  gotoLogin(type = 'Exit') {
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
    const {uname, upass} = this.state
    return (
      <Image source={require('../../assets/img/loginbg.jpg')}>
        <View style={styles.container}>
          <View style={{ alignItems: 'center', marginBottom: 40 }}>
            <Image style={{ width: 150, height: 145 }} source={require('../../assets/img/logo.png')} />
          </View>
          <WingBlank>
            <View style={styles.txtBox}>
              <Image style={styles.nameIcon} source={require('../../assets/img/nameicon.png')} /><Text>|</Text>
              <TextInput style={styles.inputStyle} blurOnSubmit={false} value={uname} placeholder='请输入用户名' onChangeText={this.unameChange.bind(this)} underlineColorAndroid='transparent' />
            </View>
          </WingBlank>
          <WingBlank>
            <View style={styles.txtBox}>
              <Image style={styles.nameIcon} source={require('../../assets/img/pwdicon.png')} /><Text>|</Text>
              <TextInput style={styles.inputStyle} blurOnSubmit={false} value={upass} placeholder='请输入密码' onChangeText={this.upassChange.bind(this)} underlineColorAndroid='transparent' secureTextEntry />
            </View>
          </WingBlank>
          <View>
            <WingBlank>
              <TouchableOpacity style={styles.loginBtn} onPress={this.onLogin.bind(this)}>
                <Text style={{ color: '#fff' }}>点击登录</Text>
              </TouchableOpacity>
            </WingBlank>
          </View>
          <Text style={styles.instructions}>
            版权所有 © 2015-2016 XXXXX
        </Text>
        </View>
      </Image>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    marginTop: 116,
    flexDirection: 'column',
    backgroundColor: 'transparent',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 116
  },
  nameIcon: {
    width: 17,
    height: 20,
    marginLeft: 20,
    marginRight: 20
  },
  loginBtn: {
    marginTop: 20,
    backgroundColor: '#004cb0',
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  txtBox: {
    height: 40,
    borderColor: 'transparent',
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5
  },
  inputStyle: {
    width: Dimensions.get('window').width - 120,
    marginLeft: 20
  },
  instructions: {
    textAlign: 'center',
    color: '#fff',
    position: 'absolute',
    bottom: 10,
    width: Dimensions.get('window').width,
    zIndex: 999
  }
})