import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import Container from './app/pages/common/Container'

export default class AuditErp extends Component {
  render() {
    return (
      <Container />
    );
  }
}

AppRegistry.registerComponent('AuditErp', () => AuditErp)
