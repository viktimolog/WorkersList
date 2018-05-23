import React from 'react'
import { Container } from 'native-base'
import { StatusBar } from 'react-native'
import WorkersContainer from './src/containers/WorkersContainer'
import WorkerInputContainer from './src/containers/WorkerInputContainer'
import AppHeaderContainer from './src/containers/AppHeaderContainer'
import { Provider } from 'react-redux'
import store from './src/store'

const App = () => (
  <Provider store={store}>
    <Container>
      <AppHeaderContainer/>
      <StatusBar backgroundColor='green' barStyle="light-content"/>
      <WorkerInputContainer/>
      <WorkersContainer/>
    </Container>
  </Provider>
)

export default App
