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
// import {   } from 'native-base';//TODO
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
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={TextConstants.SEARCH}
          value={this.state.search}
          onChangeText={this.searchHandler}
          style={styles.workerInput}
        />
        <ModalWindow addWorker={this.props.addWorker} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1
  },
  workerInput: {
    width: '55%',
    borderWidth: 1
  },
  workerButton: {
    width: '45%'
  },

  //TODO delete do not use

  addButton: {
    backgroundColor: 'green',
    width: 50,
    height: 50,
    borderRadius: 50,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 96,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 28
  },
  containerInput: {
    paddingLeft: '8%',
    width: '92%',
    paddingTop: 10
  },
  containerText: {
    paddingTop: 50
  },
  textCenter: {
    fontSize: 16,
    textAlign: 'center'
  },
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 72,
    borderWidth: 1,
    borderColor: 'blue'
  },
  text: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: 'blue'
  },
  h1: {
    fontSize: 18,
    color: 'green',
    paddingTop: 10
  },
  textRight: {
    fontSize: 16,
    textAlign: 'right'
  }
});
