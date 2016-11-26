import React, { Component, Platform } from 'react'
import { StyleSheet, Text, View, Dimensions, Navigator, TouchableOpacity, StatusBar, Image } from 'react-native'
import Welcome from './Welcome'

export default class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      titleBaseHeight: 0,
      titleColor: 'transparent',
      titleText: ''
    }
  }

  renderHead(route) {
    this.setState({
      titleBaseHeight: route.passProps.titleBaseHeight,
      titleColor: route.passProps.titleColor,
      titleText: route.passProps.titleText,
    })
  }

  renderScene(route, navigator) {
    return <route.component navigator={navigator}  {...route.passProps} />
  }

  configureScene(route, routeStack) {
    if (route.type == 'Modal') {
      return Navigator.SceneConfigs.FloatFromBottom
    }
    else if (route.type == 'Exit') {
      return Navigator.SceneConfigs.PushFromLeft
    }
    else {
      return Navigator.SceneConfigs.PushFromRight
    }
  }

  render() {
    const { titleBaseHeight, titleColor, titleText } = this.state
    const NavigationBarRouteMapper = {
      LeftButton(route, navigator, index, navState) {
        const left = route.passProps.leftText === '返回' ? <Image style={styles.leftNavButton} source={require('../../assets/img/返回.png')} /> : <Text style={styles.leftNavButtonText}>{route.passProps.leftText}</Text>
        return (
          <View style={styles.navContainer}>
            <TouchableOpacity onPress={() => { if (route.passProps.leftText === '返回') navigator.pop() } }>
              {left}
            </TouchableOpacity>
          </View>
        )
      },
      RightButton(route, navigator, index, navState) {
        if (route.onPress) {
          const right = route.rightText === '退出' ? <Image style={styles.rightNavButton} source={require('../../assets/img/注销.png')} /> : <Text style={styles.rightNavButtonText}>{route.rightText}</Text>
          return (
            <View style={styles.navContainer}>
              <TouchableOpacity onPress={() => { if (route.rightText === '退出') navigator.pop() } }>
                {right}
              </TouchableOpacity>
            </View>
          )
        }
      },
      Title(route, navigator, index, navState) {
        return (
          <View style={[styles.navContainer, { height: route.passProps.titleBaseHeight, backgroundColor: route.passProps.titleColor }]}>
            <Text style={styles.title}>{titleText}</Text>
          </View>
        )
      }
    }
    return (
      <View style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height }}>
        <StatusBar translucent backgroundColor={titleColor} />
        <Navigator
          style={{ flex: 1 }}
          initialRoute={{ name: 'FirstPage', passProps: { titleBaseHeight: 44, titleColor: 'transparent' }, component: Welcome }}
          configureScene={this.configureScene.bind(this)}
          renderScene={this.renderScene.bind(this)}
          onWillFocus={this.renderHead.bind(this)}
          navigationBar={
            <Navigator.NavigationBar
              navigationStyles={Navigator.NavigationBar.StylesIOS}
              style={[styles.navContainer, { height: titleBaseHeight + 20, backgroundColor: titleColor }]}
              routeMapper={NavigationBarRouteMapper} />}
          />
      </View>
    )
  }
}


var styles = StyleSheet.create({
  container: {
    flex: 4,
    marginTop: 100,
    flexDirection: 'column'
  },
  navContainer: {
    paddingTop: 12,
    paddingBottom: 10,
    alignItems: 'center'
  },
  button: {
    height: 60,
    marginTop: 10,
    justifyContent: 'center',
    backgroundColor: '#ff1049',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: '#ffffff'
  },
  leftNavButtonText: {
    color: '#ffffff',
    fontSize: 18,
    marginLeft: 13
  },
  leftNavButton: {
    marginLeft: 13,
    width: 22,
    height: 22
  },
  rightNavButton: {
    marginRight: 13,
    width: 22,
    height: 22
  },
  rightNavButtonText: {
    color: '#ffffff',
    fontSize: 18,
    marginRight: 13
  },
  title: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    flex: 1
  }
});

