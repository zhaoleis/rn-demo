import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, Dimensions, Navigator, TouchableOpacity, Image } from 'react-native'
import Badge from 'antd-mobile/lib/badge'
import Login from './Login'
import Dot from './Dot'

export default class Main extends Component {
  componentDidMount() {
  }

  onPress() {
    alert("我是Spike!");
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={[styles.funcBox, { borderLeftWidth: 0 }]}>
            <Dot text={'99'} left={76} />
            <Image style={{ width: 54, height: 54 }} source={require('../../assets/img/个人工作提醒.png')} />
            <Text style={styles.text}>个人工作提醒</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.funcBox, { borderLeftWidth: 0 }]}>
            <Dot text={'99'} left={76} />
            <Image style={{ width: 54, height: 54 }} source={require('../../assets/img/审计预警.png')} />
            <Text style={styles.text}>审计预警</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.funcBox, { borderLeftWidth: 0, borderRightWidth: 0 }]}>
            <Image style={{ width: 54, height: 54 }} source={require('../../assets/img/审计计划查询.png')} />
            <Text style={styles.text}>审计计划查询</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={[styles.funcBox, { borderLeftWidth: 0 }]}>
            <Image style={{ width: 54, height: 54 }} source={require('../../assets/img/项目进度监控.png')} />
            <Text style={styles.text}>项目进度监控</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.funcBox, { borderLeftWidth: 0 }]}>
            <Image style={{ width: 54, height: 54 }} source={require('../../assets/img/审计项目实施.png')} />
            <Text style={styles.text}>审计项目实施</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.funcBox, { borderLeftWidth: 0, borderRightWidth: 0 }]}>
            <Image style={{ width: 54, height: 54 }} source={require('../../assets/img/审计项目查询.png')} />
            <Text style={styles.text}>审计项目查询</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={[styles.funcBox, { borderLeftWidth: 0 }]}>
            <Image style={{ width: 54, height: 54 }} source={require('../../assets/img/公告.png')} />
            <Text style={styles.text}>通知公告</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.funcBox, { borderLeftWidth: 0 }]}>
            <Image style={{ width: 54, height: 54 }} source={require('../../assets/img/学习园地.png')} />
            <Text style={styles.text}>学习园地</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    backgroundColor: '#F5FCFF',
    height: Dimensions.get('window').height - 66
  },
  funcBox: {
    width: Dimensions.get('window').width / 3,
    alignItems: 'center',
    borderColor: '#dcdcdc',
    borderWidth: 1,
    borderTopWidth: 0,
    height: 140,
    justifyContent: 'center'
  },
  text: {
    color: '#323232',
    marginTop: 15
  }
})
