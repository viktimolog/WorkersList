import React, { Component } from 'react'
import { TextInput, View } from 'react-native'
import { Header, Item, Icon } from 'native-base'
import { TextConstants } from '../constants/TextConstants'
import ModalWindow from './ModalWindow'

export default class WorkerInput extends Component {

  state = {search: ''}

  componentDidMount () {
    if (this.props.search !== '')
      this.itemInput.focus()
    this.setState({search: this.props.search})
  }

  searchHandler = val => {
    this.setState({
      search: val
    })
    this.props.setGetData(this.state.search)
    this.props.findWorker(val)
  }

  render () {
    return (
      <Header searchBar rounded>
        <Item style={{backgroundColor: 'lightgray', borderRadius: 5}}>
          <Icon name="ios-search"/>
          <TextInput
            style={{flex: 1, fontSize: 16}}
            ref={input => {
              this.itemInput = input
            }}
            placeholder={TextConstants.SEARCH}
            onChangeText={this.searchHandler}
            value={this.state.search}/>
        </Item>
        <View style={{justifyContent: 'center', paddingLeft: 10}}>
          <ModalWindow
            addWorker={this.props.addWorker}
            setGetData={this.props.setGetData}
          />
        </View>
      </Header>
    )
  }
}