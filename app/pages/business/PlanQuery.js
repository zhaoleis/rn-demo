import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, Dimensions, Navigator, TouchableOpacity, Image, WingBlank } from 'react-native'
export default class PlanQuery extends Component {
  onPress() {
    console.log('aaa')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#dcdcdc', }}>
          <TouchableOpacity style={[styles.funcBox, { borderLeftWidth: 0 }]}>
            <View style={{flexDirection: 'row',alignItems: 'center',}}>
              <Image style={{ width: 19, height: 14,marginRight:5 }} source={require('../../assets/img/listicon.png')} />
              <Text style={styles.text}>年度计划(发文)</Text>
            </View>
            <Image style={{ width: 12, height: 21 }} source={require('../../assets/img/enter.png')} />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', borderTopWidth: 0, borderBottomWidth: 1, borderColor: '#dcdcdc', }}>
          <TouchableOpacity style={[styles.funcBox, { borderLeftWidth: 0 }]}>
            <View style={{flexDirection: 'row',alignItems: 'center',}}>
              <Image style={{ width: 19, height: 14,marginRight:5 }} source={require('../../assets/img/listicon.png')} />
              <Text style={styles.text}>年度项目计划</Text>
            </View>
            <Image style={{ width: 12, height: 21 }} source={require('../../assets/img/enter.png')} />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', borderTopWidth: 0, borderBottomWidth: 1, borderColor: '#dcdcdc', }}>
          <TouchableOpacity style={[styles.funcBox, { borderLeftWidth: 0 }]}>
            <View style={{flexDirection: 'row',alignItems: 'center',}}>
              <Image style={{ width: 19, height: 14,marginRight:5 }} source={require('../../assets/img/listicon.png')} />
              <Text style={styles.text}>一季度</Text>
            </View>
            <Image style={{ width: 12, height: 21 }} source={require('../../assets/img/enter.png')} />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', borderTopWidth: 0, borderBottomWidth: 1, borderColor: '#dcdcdc', }}>
          <TouchableOpacity style={[styles.funcBox, { borderLeftWidth: 0 }]}>
            <View style={{flexDirection: 'row',alignItems: 'center',}}>
              <Image style={{ width: 19, height: 14,marginRight:5 }} source={require('../../assets/img/listicon.png')} />
              <Text style={styles.text}>二季度</Text>
            </View>
            <Image style={{ width: 12, height: 21 }} source={require('../../assets/img/enter.png')} />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', borderTopWidth: 0, borderBottomWidth: 1, borderColor: '#dcdcdc', }}>
          <TouchableOpacity style={[styles.funcBox, { borderLeftWidth: 0 }]}>
            <View style={{flexDirection: 'row',alignItems: 'center',}}>
              <Image style={{ width: 19, height: 14,marginRight:5 }} source={require('../../assets/img/listicon.png')} />
              <Text style={styles.text}>三季度</Text>
            </View>
            <Image style={{ width: 12, height: 21 }} source={require('../../assets/img/enter.png')} />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', borderTopWidth: 0, borderBottomWidth: 1, borderColor: '#dcdcdc', }}>
          <TouchableOpacity style={[styles.funcBox, { borderLeftWidth: 0 }]}>
            <View style={{flexDirection: 'row',alignItems: 'center',}}>
              <Image style={{ width: 19, height: 14,marginRight:5 }} source={require('../../assets/img/listicon.png')} />
              <Text style={styles.text}>四季度</Text>
            </View>
            <Image style={{ width: 12, height: 21 }} source={require('../../assets/img/enter.png')} />
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
    height: Dimensions.get('window').height - 66,
    paddingTop: 20
  },
  funcBox: {
    width: Dimensions.get('window').width,
    alignItems: 'center',
    height: 60,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#fff'
  },
  text: {
    color: '#323232',
    fontSize: 16
  }
})
