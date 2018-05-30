import {
    DEL_WORKER,
    ADD_WORKER,
    EDIT_WORKER,
    FIND_WORKER,
    GET_WORKERS,
    SET_GETDATA
} from './actionTypes';
import Urls from '../constants/Urls'
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
                type: SET_GETDATA,
                payload: false,
            })
        )
}

// Update Worker
export const editWorker = selectedWorker => dispatch => {
    axios
        .put(Urls.updateWorker + selectedWorker._id, selectedWorker)
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
                type: SET_GETDATA,
                payload: false,
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
                type: SET_GETDATA,
                payload: false,
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
                        payload: res.data.worker,
                    })
                } else {
                    alert('This worker has been already added!');
                    dispatch({
                        type: SET_GETDATA,
                        payload: false,
                    })
                }
            }
        )
        .catch(err =>
            dispatch({
                type: SET_GETDATA,
                payload: false,
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

// GETDATA true
export const setGetData = search => dispatch => {
    dispatch({
        type: SET_GETDATA,
        payload: true,
        search
    })
}