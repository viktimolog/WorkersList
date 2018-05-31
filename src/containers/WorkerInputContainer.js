import React from 'react'
import { StyleSheet } from 'react-native'
import {
  Container,
  Body,
  Header,
  Text
} from 'native-base'
import WorkerInput from '../components/WorkerInput'
import Loader from '../components/Loader'
import { connect } from 'react-redux'
import { addWorker, findWorker, setGetData } from '../actions'
import PropTypes from 'prop-types'
import { TextConstants } from '../constants/TextConstants'

const WorkerInputContainer = ({workers, search, setGetData, getData, addWorker, findWorker}) => {
  if (!getData && workers.length !== 0)
    return (
      <WorkerInput
        search={search}
        setGetData={setGetData}
        addWorker={addWorker}
        findWorker={findWorker}/>)
  if (getData)
    return (
      <Container>
        <Header>
          <Body>
          <Text style={styles.textLoader}>
            {TextConstants.PLEASEWAIT}
          </Text>
          </Body>
        </Header>
        <Loader/>
      </Container>
    )
  return null
}

WorkerInputContainer.propTypes = {
  addWorker: PropTypes.func.isRequired,
  findWorker: PropTypes.func.isRequired,
  getData: PropTypes.bool.isRequired,
  workers: PropTypes.array.isRequired,
  setGetData: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  getData: state.workersReducer.getData,
  search: state.workersReducer.search,
  workers: state.workersReducer.workers
})

export default connect(
  mapStateToProps,
  {
    addWorker,
    findWorker,
    setGetData
  }
)(WorkerInputContainer)

const styles = StyleSheet.create({
  textLoader: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 18
  }
})