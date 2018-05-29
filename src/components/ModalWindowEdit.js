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
import { TextConstants } from '../constants/TextConstants';
import DatePicker from 'react-native-datepicker'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class ModalWindowEdit extends Component {
  state = {
    modalVisible: false,
    name: '',
    birthday: '',
    position: '',
    salary: ''
  }

  saveItemHandler = () => {
    if ((this.state.name.trim() === '') ||
      (this.state.birthday === '') ||
      (this.state.position.trim() === '') ||
      (this.state.salary.trim() === '')) {
      alert('Please, fill all the fields!');
      return;
    }
    const newWorker = {
      _id: this.props.worker._id,
      name: this.state.name.trim(),
      birthday: this.state.birthday,
      position: this.state.position.trim(),
      salary: this.state.salary.trim()
    }
    this.props.editWorker(newWorker);
    this.setModalVisible(false);
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
    const { worker } = this.props;
    this.setState({
      name: worker.name,
      birthday: worker.birthday,
      position: worker.position,
      salary: worker.salary,
      modalVisible: visible,
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
                onPress={this.saveItemHandler}
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
                placeholder={TextConstants.SELECTDATE}
                format={TextConstants.FORMATDATE}
                minDate={TextConstants.MINDATE}
                maxDate={TextConstants.MAXDATE}
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
        <TouchableOpacity onPress={() => { this.setModalVisible(true) }}>
          <Icon name='edit' size={30} color='green' />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerInput: {
    paddingLeft: '8%',
    width: '92%',
    paddingTop: 10
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
  }
});