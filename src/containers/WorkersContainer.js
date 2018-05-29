import React, { Component } from 'react'
import Workers from '../components/Workers'
import { connect } from 'react-redux'
import {
  delWorker,
  editWorker,
  getWorkers
} from '../actions'
import PropTypes from 'prop-types'
import axios from 'axios'
import Urls from '../constants/Urls'

class WorkersContainer extends Component {

  async getData(url) {
    try {
      const response = await axios.get(url).then(res => res.data);
      this.props.getWorkers(response);
    } catch (error) {
      alert('error = '+error);
    }
  }

  componentDidMount() {
    this.getData(Urls.getWorkers);
  }

  render() {
    return (
      <Workers
        workers={this.props.workers}
        getWorkers={this.props.getWorkers}
        delWorker={this.props.delWorker}
        editWorker={this.props.editWorker} />
    )
  }
}

WorkersContainer.propTypes = {
  workers: PropTypes.array.isRequired,
  delWorker: PropTypes.func.isRequired,
  editWorker: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  workers: state.workersReducer.workers
})

export default connect(
  mapStateToProps,
  {
    delWorker,
    editWorker,
    getWorkers
  }
)(WorkersContainer)
