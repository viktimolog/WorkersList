import {
  DEL_WORKER,
  ADD_WORKER,
  EDIT_WORKER,
  FIND_WORKER,
  GET_WORKERS
} from '../actions/actionTypes'

const initialState = { workers: [] }

export default (state = initialState, action) => {
  switch (action.type) {

    case EDIT_WORKER: {
      return {
        ...state,
        workers: [action.payload, ...state.workers.filter(worker => worker._id !== action.payload._id)]
      }
    }

    case DEL_WORKER: {
      return {
        ...state,
        workers: state.workers.filter(worker => worker._id !== action.payload)
      }
    }

    case ADD_WORKER: {
      return {
        ...state,
        workers: [action.payload, ...state.workers]
      }
    }

    case FIND_WORKER: {
      if (action.text.trim() === '')
        return {
          ...state,
          workers: action.payload
        }
      return {
        ...state,
        workers: action.payload.filter(worker => worker.name.includes(action.text.trim()))
      }
    }

    case GET_WORKERS: {
      return {
        ...state,
        workers: action.payload,
      };
    }

    default:
      return state
  }
}
