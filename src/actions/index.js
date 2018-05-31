import {
  DEL_WORKER,
  ADD_WORKER,
  EDIT_WORKER,
  FIND_WORKER,
  GET_WORKERS,
  SET_GETDATA
} from './actionTypes'
import { GetWorkers, UpdateWorker, DelWorker, AddWorker } from './axiosRequests'
import { TextConstants } from '../constants/TextConstants'

// Get Workers
export const getWorkers = () => dispatch => {
  GetWorkers()
    .then(res =>
      dispatch({
        type: GET_WORKERS,
        payload: res.data
      })
    )
    .catch(err => {
        alert(TextConstants.SERVETNOTRESP)
        dispatch({
          type: GET_WORKERS,
          payload: []
        })
      }
    )
}

// Add Worker
export const addWorker = newWorker => dispatch => {
  AddWorker(newWorker)
    .then(res => {
        if (res.data.success) {
          alert(TextConstants.NEWWORKERADDED)
          dispatch({
            type: ADD_WORKER,
            payload: res.data.worker,
          })
        } else {
          alert(TextConstants.WORKERALREADYADDED)
          dispatch({
            type: SET_GETDATA,
            payload: false,
          })
        }
      }
    )
    .catch(err => {
        alert(TextConstants.SERVETNOTRESP)
        dispatch({
          type: GET_WORKERS,
          payload: []
        })
      }
    )
}

// Update Worker
export const editWorker = selectedWorker => dispatch => {
  UpdateWorker(selectedWorker)
    .then(res => {
        if (!res.data.success) {
          alert(TextConstants.WORKERALREADYADDED)
          dispatch({
            type: SET_GETDATA,
            payload: false,
          })
        }
        else {
          alert(TextConstants.WORKEREDITED)
          dispatch({
            type: EDIT_WORKER,
            payload: selectedWorker
          })
        }
      }
    )
    .catch(err => {
        alert(TextConstants.SERVETNOTRESP)
        dispatch({
          type: GET_WORKERS,
          payload: []
        })
      }
    )
}

// Find Worker
export const findWorker = text => dispatch => {
  GetWorkers()
    .then(res =>
      dispatch({
        type: FIND_WORKER,
        payload: res.data,
        text: text
      })
    )
    .catch(err => {
        alert(TextConstants.SERVETNOTRESP)
        dispatch({
          type: GET_WORKERS,
          payload: []
        })
      }
    )
}

// Delete Worker
export const delWorker = id => dispatch => {
  DelWorker(id).then(res => {
      alert(TextConstants.WORKERDELETED)
      dispatch({
        type: DEL_WORKER,
        payload: id
      })
    }
  )
    .catch(err => {
        alert(TextConstants.SERVETNOTRESP)
        dispatch({
          type: GET_WORKERS,
          payload: []
        })
      }
    )
}

// GETDATA true
export const setGetData = search => dispatch => {
  dispatch({
    type: SET_GETDATA,
    payload: true,
    search
  })
}