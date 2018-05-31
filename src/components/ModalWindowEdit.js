import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { TextConstants } from '../constants/TextConstants'
import Icon from 'react-native-vector-icons/FontAwesome'
import ModalWindow from './ModalWindow'

export default class ModalWindowEdit extends ModalWindow {
  constructor () {
    super()
  }

  getTitle = () => (
    <Text style={{color: 'red', fontSize: 18}}>{TextConstants.EDIT}</Text>
  )

  getButton = () => (
    <TouchableOpacity onPress={() => {
      this.setModalVisible(true)
    }}>
      <Icon name='edit' size={30} color='green'/>
    </TouchableOpacity>
  )

  addNewItemHandler = () => {
    if ((this.state.name.trim() === '') ||
      (this.state.birthday === '') ||
      (this.state.position.trim() === '') ||
      (this.state.salary.trim() === '')) {
      alert(TextConstants.FILLALLTHEFIELDS)
      return
    }
    const newWorker = {
      _id: this.props.worker._id,
      name: this.state.name.trim(),
      birthday: this.state.birthday,
      position: this.state.position.trim(),
      salary: this.state.salary.trim()
    }
    this.setModalVisible(false)
    this.props.setGetData()
    this.props.editWorker(newWorker)
  }

  setModalVisible (visible) {
    const {worker} = this.props
    this.setState({
      name: worker.name,
      birthday: worker.birthday,
      position: worker.position,
      salary: worker.salary,
      modalVisible: visible,
    })
  }
}
