import {
  DEL_WORKER,
  ADD_WORKER,
  EDIT_WORKER_SAVE,
  EDIT_WORKER_MODE,
  FIND_WORKER
} from '../actions/actionTypes'

const initialState = {
  workers: [
    {
      id: Math.floor(Date.now() / 1000),
      name: 'Ivanov Ivan Ivanovich',
      birthday: '19.01.1978',
      position: 'master',
      salary:'1200'
    },
    {
      id: Math.floor(Date.now() / 1000)+1,
      name: 'Peter Petrov Petrovich',
      birthday: '23.11.1968',
      position: 'engineer',
      salary:'800'
    },
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {

    case DEL_WORKER: {
        return {
          ...state,
          workers: state.workers.filter(worker => worker.id !== action.id)
        }
    }

    case ADD_WORKER: {
        return {
          workers: [action.newWorker, ...state.workers]
        }
    }

    case EDIT_WORKER_MODE: {
      alert('editWorkerMode');
      return {...state};
    }

    case EDIT_WORKER_SAVE: {

    }

//TODO I am doing it now
    case FIND_WORKER: {
      alert('FIND_WORKER');
      return {...state};
    }

    default:
      return state
  }
};
