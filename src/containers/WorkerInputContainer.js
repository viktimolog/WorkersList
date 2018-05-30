import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Container,
  Body,
  Header,
  Text
} from 'native-base';
import WorkerInput from '../components/WorkerInput';
import Loader from '../components/Loader';
import { connect } from 'react-redux';
import { addWorker, findWorker, setGetData } from '../actions';
import PropTypes from 'prop-types';

const WorkerInputContainer = ({ search, setGetData, getData, addWorker, findWorker }) => {
  if (!getData)
    return (
      <WorkerInput
        search={search}
        setGetData={setGetData}
        addWorker={addWorker}
        findWorker={findWorker} />)
  return (
    <Container>
      <Header>
        <Body>
          <Text
            style={styles.textLoader}
          >
            Please wait while data is loading
        </Text>
        </Body>
      </Header>
      <Loader />
    </Container>
  )
}

WorkerInputContainer.propTypes = {
  addWorker: PropTypes.func.isRequired,
  findWorker: PropTypes.func.isRequired,
  getData: PropTypes.bool.isRequired,
  setGetData: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  getData: state.workersReducer.getData,
  search: state.workersReducer.search
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
});