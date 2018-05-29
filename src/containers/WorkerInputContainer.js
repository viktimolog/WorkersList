import React from 'react';
import WorkerInput from '../components/WorkerInput';
import { connect } from 'react-redux';
import { addWorker, findWorker } from '../actions';
import PropTypes from 'prop-types';

const WorkerInputContainer = ({ addWorker, findWorker }) => (
  <WorkerInput
    addWorker={addWorker}
    findWorker={findWorker} />)

WorkerInputContainer.propTypes = {
  addWorker: PropTypes.func.isRequired,
  findWorker: PropTypes.func.isRequired
}

export default connect(
  null,
  {
    addWorker,
    findWorker
  }
)(WorkerInputContainer)
