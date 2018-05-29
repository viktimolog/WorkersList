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
import DatePicker from 'react-native-datepicker'

export default class ModalWindow extends Component {
  state = {
    modalVisible: false,
    name: '',
    birthday: '',
    position: '',
    salary: ''
  }

  addNewItemHandler = () => {
    if ((this.state.name.trim() === '') ||
      (this.state.birthday === '') ||
      (this.state.position.trim() === '') ||
      (this.state.salary.trim() === '')
    ) {
      alert('Please, fill all the fields!');
      return;
    }

    const newWorker = {
      name: this.state.name.trim(),
      birthday: this.state.birthday,
      position: this.state.position.trim(),
      salary: this.state.salary.trim()
    }
    this.setModalVisible(false);
    this.props.addWorker(newWorker);
  }

  salaryHandler = val => {
    this.setState({
      salary: val.replace(/[^0-9]/g, '')
    })
  }

  nameHandler = val => {
    this.setState({
      name: val.replace(/[^ а-яА-ЯеЁa-zA-Z]/g, '')
    })
  }

  positionHandler = val => {
    this.setState({
      position: val.replace(/[^ а-яА-ЯеЁa-zA-Z]/g, '')
    })
  }

  setModalVisible(visible) {
    this.setState({
      modalVisible: visible,
      name: '',
      birthday: '',
      position: '',
      salary: ''
    })
  }

  render() {
    return (
      <View>
        <Modal
          animationType='fade'
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(false)
          }}>
          <View>
            <View style={styles.container}>
              <Button
                title={TextConstants.CANCEL}
                style={styles.workerButton}
                onPress={() => { this.setModalVisible(!this.state.modalVisible) }}
              />
              <Text style={{ color: 'red', fontSize: 18 }}>{TextConstants.ADD}</Text>
              <Button
                title={TextConstants.DONE}
                style={styles.workerButton}
                onPress={this.addNewItemHandler}
              />
            </View>
            <View style={styles.containerInput}>
              <Text style={styles.h1}>{TextConstants.NAME}</Text>
              <TextInput
                style={styles.text}
                autoFocus={true}
                onChangeText={this.nameHandler}
                value={this.state.name}>
              </TextInput>
              <Text style={styles.h1}>{TextConstants.BIRTHDAY}</Text>
              <DatePicker
                style={{ width: 200, padding: 10 }}
                date={this.state.birthday}
                mode='date'
                placeholder='select date'
                format='YYYY-MM-DD'
                minDate='1940-01-01'
                maxDate='2000-01-01'
                confirmBtnText='Confirm'
                cancelBtnText='Cancel'
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0
                  },
                  dateInput: {
                    marginLeft: 36
                  }
                }}
                onDateChange={date => { this.setState({ birthday: date }) }}
              />
              <Text style={styles.h1}>{TextConstants.POSITION}</Text>
              <TextInput
                style={styles.text}
                onChangeText={this.positionHandler}
                value={this.state.position}>
              </TextInput>
              <Text style={styles.h1}>{TextConstants.SALARY}</Text>
              <TextInput
                keyboardType='numeric'
                style={styles.text}
                onChangeText={this.salaryHandler}
                value={this.state.salary}>
              </TextInput>
            </View>
          </View>
        </Modal>
        <Button
          title={TextConstants.ADD}
          style={styles.workerButton}
          onPress={() => { this.setModalVisible(true) }}
        />
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
