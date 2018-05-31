import React from 'react'
import { Header, Body, Title } from 'native-base'
import { StyleSheet } from 'react-native'
import { TextConstants } from '../constants/TextConstants'

const AppHeader = () => (
  <Header>
    <Body style={styles.container}>
    <Title>
      {TextConstants.TITLEAPP}
    </Title>
    </Body>
  </Header>
)

const styles = StyleSheet.create({
  container: {
    paddingLeft: 5,
    paddingRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 72
  }
})

export default AppHeader
