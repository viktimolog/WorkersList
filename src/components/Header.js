import React from 'react'
import { Header, Body, Title } from 'native-base'
import { StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const AppHeader = () => (
  <Header>
    <Body style={styles.container}>
    <Title>
      WorkerList: Redux, Local State
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
