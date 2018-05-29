import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import ModalWindowEdit from './ModalWindowEdit'
import PropTypes from 'prop-types'

export default class Worker extends Component {
  render() {
    const {
      worker,
      delWorker,
      editWorker
    } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          {worker.name}
        </Text>
        <View style={styles.containerRight1}>
          <ModalWindowEdit
            worker={worker}
            editWorker={editWorker}
          />
        </View>
        <View style={styles.containerRight2}>
          <TouchableOpacity onPress={() => delWorker(worker._id)}>
            <Icon name='trash' size={30} color='red' />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

Worker.propTypes = {
  worker: PropTypes.object.isRequired,
  editWorker: PropTypes.func.isRequired,
  delWorker: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
    flexDirection: 'row',
    height: 72,
    borderWidth: 1
  },
  containerRight1: {
    position: 'absolute',
    right: 60,
    width: 60,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 72,
    borderWidth: 1
  },
  containerRight2: {
    position: 'absolute',
    right: 0,
    width: 60,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 72,
    borderWidth: 1
  },
  containerText: {
    flex: 1,
    justifyContent: 'space-between',
    marginLeft: 30,
    marginRight: 20
  },
  textCompleted: {
    fontSize: 16,
    color: 'lightgray'
  },
  text: {
    fontSize: 16,
    color: 'blue'
  }
})
