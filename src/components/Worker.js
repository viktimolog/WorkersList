import React from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import ModalWindowEdit from './ModalWindowEdit'
import PropTypes from 'prop-types'

const Worker = ({worker, editWorker, delWorker, setGetData}) => {
  const delHandler = () => {
    setGetData()
    delWorker(worker._id)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {worker.name}
      </Text>
      <View style={styles.containerRight1}>
        <ModalWindowEdit
          worker={worker}
          editWorker={editWorker}
          setGetData={setGetData}
        />
      </View>
      <View style={styles.containerRight2}>
        <TouchableOpacity onPress={delHandler}>
          <Icon name='trash' size={30} color='red'/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

Worker.propTypes = {
  worker: PropTypes.object.isRequired,
  editWorker: PropTypes.func.isRequired,
  delWorker: PropTypes.func.isRequired,
  setGetData: PropTypes.func.isRequired
}

export default Worker

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
  text: {
    fontSize: 16,
    color: 'blue'
  }
})