import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { TextConstants } from '../constants/TextConstants'
import Urls from '../constants/Urls'
import {
  Container,
  Body,
  Header,
  Text
} from 'native-base'

const TryAgain = ({getData}) => {
  const getHandler = () => {
    getData(Urls.getWorkers)
  }

  return (
    <Container>
      <Header>
        <Body>
        <Text style={styles.textHeader}>
          {TextConstants.SERVETNOTRESP}
        </Text>
        </Body>
      </Header>
      <View style={styles.container}>
        <TouchableOpacity style={styles.buttonTryAgain}
                          onPress={getHandler}>
          <Text style={styles.buttonTryAgainText}>
            {TextConstants.TRYAGAIN}
          </Text>
        </TouchableOpacity>
      </View>
    </Container>
  )
}
export default TryAgain

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '50%',
    alignSelf: 'center'
  },
  textHeader: {
    color: 'red',
    alignSelf: 'center',
    fontSize: 18
  },
  buttonTryAgain: {
    backgroundColor: 'blue',
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: '#ccc',
    justifyContent: 'center'
  },
  buttonTryAgainText: {
    color: '#fff',
    fontSize: 24,
    justifyContent: 'center'
  }
})
