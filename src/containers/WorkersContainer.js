import React, {Component} from 'react'
import Workers from '../components/Workers'
import {connect} from 'react-redux'
import {setGetData, delWorker, editWorker, getWorkers} from '../actions'
import PropTypes from 'prop-types'
import axios from 'axios'
import Urls from '../constants/Urls'

class WorkersContainer extends Component {
    async getData(url) {
        try {
            const response = await axios
                .get(url)
                .then(res => res.data);
            this.props.getWorkers(response);
        } catch (error) {
            alert('error = ' + error);
        }
    }

    componentDidMount() {
        this.getData(Urls.getWorkers);
    }

    render() {
        if (!this.props.getData)
            return (
                <Workers
                    workers={this.props.workers}
                    setGetData={this.props.setGetData}
                    delWorker={this.props.delWorker}
                    editWorker={this.props.editWorker}/>
            )
        return null;
    }
}

WorkersContainer.propTypes = {
    workers: PropTypes.array.isRequired,
    delWorker: PropTypes.func.isRequired,
    setGetData: PropTypes.func.isRequired,
    editWorker: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    workers: state.workersReducer.workers,
    getData: state.workersReducer.getData
})

export default connect(
    mapStateToProps,
    {
        delWorker,
        editWorker,
        getWorkers,
        setGetData
    }
)(WorkersContainer)
