import {
    DEL_WORKER,
    ADD_WORKER,
    EDIT_WORKER,
    FIND_WORKER,
    GET_WORKERS,
    SET_GETDATA
} from '../actions/actionTypes'

const initialState = {workers: [], getData: true, search: ''}

export default (state = initialState, action) => {
    switch (action.type) {

        case EDIT_WORKER: {
            return {
                ...state,
                workers: [action.payload,
                    ...state.workers.filter(worker => worker._id !== action.payload._id)],
                getData: false
            }
        }

        case DEL_WORKER: {
            return {
                ...state,
                workers: state.workers.filter(worker => worker._id !== action.payload),
                getData: false
            }
        }

        case ADD_WORKER: {
            return {
                ...state,
                workers: [action.payload, ...state.workers],
                getData: false
            }
        }

        case FIND_WORKER: {
            if (action.text.trim() === '')
                return {
                    ...state,
                    workers: action.payload,
                    getData: false,
                    search: ''
                }
            return {
                ...state,
                workers: action.payload.filter(worker => worker.name.includes(action.text.trim())),
                getData: false,
                search: action.text.trim()
            }
        }

        case GET_WORKERS: {
            return {
                ...state,
                workers: action.payload,
                getData: false
            };
        }

        case SET_GETDATA: {
            return {
                ...state,
                getData: action.payload
            };
        }

        default:
            return state
    }
}
