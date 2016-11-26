import React, { Component, Platform } from 'react'
import { StyleSheet, Text, View, Dimensions, Navigator, TouchableOpacity, StatusBar } from 'react-native'
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
    else if(route.type == 'Exit'){
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
        if (index > 0) {
          return (
            <View style={styles.navContainer}>
              <TouchableOpacity
                underlayColor='transparent'
                onPress={() => { if (index > 0) { navigator.pop() } } }>
                <Text style={styles.leftNavButtonText}>{route.passProps.leftText}</Text>
              </TouchableOpacity>
            </View>
          );
        } else {
          return null
        }
      },
      RightButton(route, navigator, index, navState) {
        if (route.onPress)
          return (
            <View style={styles.navContainer}>
              <TouchableOpacity
                onPress={() => route.onPress()}>
                <Text style={styles.rightNavButtonText}>
                  {route.rightText}
                </Text>
              </TouchableOpacity>
            </View>
          )
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

