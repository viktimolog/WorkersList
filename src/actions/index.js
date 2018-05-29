import {
  DEL_WORKER,
  ADD_WORKER,
  EDIT_WORKER,
  FIND_WORKER,
  GET_WORKERS
} from './actionTypes';
import Urls from '../constants/Urls'
import TextConstants from '../constants/TextConstants'
import axios from 'axios'

// Find Worker
export const findWorker = text => dispatch => {
  axios
    .get(Urls.getWorkers)
    .then(res =>
      dispatch({
        type: FIND_WORKER,
        payload: res.data,
        text: text
      })
    )
    .catch(err =>
      dispatch({
        type: FIND_WORKER,
        payload: null
      })
    )
}

// Edit Worker
export const editWorker = selectedWorker => dispatch => {
  axios
    .put(Urls.delWorker + selectedWorker._id, selectedWorker)
    .then(res => {
      alert('The worker has been edited!');
      dispatch({
        type: EDIT_WORKER,
        payload: selectedWorker
      })
    }
    )
    .catch(err =>
      dispatch({
        type: EDIT_WORKER,
        payload: err.response.data
      })
    )
}

// Delete Worker
export const delWorker = id => dispatch => {
  axios
    .delete(Urls.delWorker + id)
    .then(res => {
      alert('Worker has been deleted');
      dispatch({
        type: DEL_WORKER,
        payload: id
      })
    }
    )
    .catch(err =>
      dispatch({
        type: DEL_WORKER,
        payload: err.response.data
      })
    )
}

// Add Worker
export const addWorker = newWorker => dispatch => {
  axios
    .post(Urls.addWorker, newWorker)
    .then(res => {
      if (res.data.success) {
        alert('New worker has been added!');
        dispatch({
          type: ADD_WORKER,
          payload: res.data.worker
        })
      } else {
        alert('This worker has been already added!');
      }
    }
    )
    .catch(err =>
      dispatch({
        type: ADD_WORKER,
        payload: null
      })
    )
}

// Get Workers
export const getWorkers = () => dispatch => {
  axios
    .get(Urls.getWorkers)
    .then(res =>
      dispatch({
        type: GET_WORKERS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_WORKERS,
        payload: null
      })
    )
}