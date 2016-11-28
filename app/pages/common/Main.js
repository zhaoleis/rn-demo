import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, Dimensions, Navigator, TouchableOpacity, Image } from 'react-native'
import Badge from 'antd-mobile/lib/badge'
import PlanQuery from '../business/PlanQuery'
import Dot from './Dot'

export default class Main extends Component {
  componentDidMount() {
  }

  onPress() {
    this.gotoNext()
  }
  gotoNext(type = 'Normal') {
    this.props.navigator.push({
      component: PlanQuery,
      passProps: {
        titleBaseHeight: 44,
        titleColor: '#004cb0',
        titleText: '审计计划',
        leftText: '返回',
      },
      onPress: this.onQuery.bind(this),
      rightText: '查询',
      type: type
    })
  }
  onQuery() {
    console.log('query')
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={[styles.funcBox, { borderLeftWidth: 0 }]}>
            <Dot text={'99'} left={76} />
            <Image style={{ width: 54, height: 54 }} source={require('../../assets/img/1.png')} />
            <Text style={styles.text}>个人工作提醒</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.funcBox, { borderLeftWidth: 0 }]}>
            <Dot text={'99'} left={76} />
            <Image style={{ width: 54, height: 54 }} source={require('../../assets/img/2.png')} />
            <Text style={styles.text}>审计预警</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.funcBox, { borderLeftWidth: 0, borderRightWidth: 0 }]} onPress={this.onPress.bind(this)}>
            <Image style={{ width: 54, height: 54 }} source={require('../../assets/img/3.png')} />
            <Text style={styles.text}>审计计划查询</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={[styles.funcBox, { borderLeftWidth: 0 }]}>
            <Image style={{ width: 54, height: 54 }} source={require('../../assets/img/4.png')} />
            <Text style={styles.text}>项目进度监控</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.funcBox, { borderLeftWidth: 0 }]}>
            <Image style={{ width: 54, height: 54 }} source={require('../../assets/img/5.png')} />
            <Text style={styles.text}>审计项目实施</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.funcBox, { borderLeftWidth: 0, borderRightWidth: 0 }]}>
            <Image style={{ width: 54, height: 54 }} source={require('../../assets/img/6.png')} />
            <Text style={styles.text}>审计项目查询</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={[styles.funcBox, { borderLeftWidth: 0 }]}>
            <Image style={{ width: 54, height: 54 }} source={require('../../assets/img/7.png')} />
            <Text style={styles.text}>通知公告</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.funcBox, { borderLeftWidth: 0 }]}>
            <Image style={{ width: 54, height: 54 }} source={require('../../assets/img/8.png')} />
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
