import React from 'react'
import Workers from '../components/Workers'
import { connect } from 'react-redux'
import { delWorker, editWorkerSave, editWorkerMode } from '../actions'
import PropTypes from 'prop-types'

const mapStateToProps = state => ({
  mode: state.modesReducer.mode,
  workers: state.workersReducer.workers
})

const WorkersContainer = ({workers, delWorker, editWorkerSave, editWorkerMode}) => (
  <Workers
    workers={workers}
    delWorker={delWorker}
    editWorkerSave={editWorkerSave}
    editWorkerMode={editWorkerMode}/>)

WorkersContainer.propTypes = {
  workers: PropTypes.array.isRequired,
  delWorker: PropTypes.func.isRequired,
  editWorkerSave: PropTypes.func.isRequired,
  editWorkerMode: PropTypes.func.isRequired
}

export default connect(
  mapStateToProps,
  {
    delWorker,
    editWorkerSave,
    editWorkerMode
  }
)(WorkersContainer)
