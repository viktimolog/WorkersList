import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  TouchableHighlight,
  Modal,
  View,
  Button,
  TextInput,
  StyleSheet
} from 'react-native';
import { Header, Item, Icon, Input } from 'native-base';
import { TextConstants } from '../constants/TextConstants';
import ModalWindow from './ModalWindow'

export default class WorkerInput extends Component {

  state = { search: '' }

  searchHandler = val => {
    this.setState({
      search: val
    });
    this.props.findWorker(val);
  };

  render() {
    return (
          <Header searchBar rounded>
            <Item style={{ backgroundColor: 'lightgray', borderRadius: 5 }}>
              <Icon name="ios-search" />
              <Input 
              placeholder={TextConstants.SEARCH}
              onChangeText={this.searchHandler} 
              value={this.state.search} />
            </Item>
            <View  style={{ justifyContent: 'center', paddingLeft: 10 }}>
            <ModalWindow addWorker={this.props.addWorker}/>
            </View>
          </Header>          
    )
  }
}