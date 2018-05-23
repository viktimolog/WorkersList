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
      birthday: '1978-01-19',
      position: 'master',
      salary:'1200'
    },
    {
      id: Math.floor(Date.now() / 1000)+1,
      name: 'Peter Petrov Petrovich',
      birthday: '1989-11-23',
      position: 'engineer',
      salary:'800'
    }
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

//action.selectedWorker
    case EDIT_WORKER_MODE: {
      return {     
        workers: [action.selectedWorker,
          ...state.workers.filter(worker => worker.id !== action.selectedWorker.id)]
      }
    }

    case EDIT_WORKER_SAVE: {

    }

//TODO   action.text
    case FIND_WORKER: {

      // let newArr = new Set();
      // for(let i=0; i<state.workers.length; i++){
      //   let res = undefined;
      //   res = state.workers[i].name.find(f => f === action.text);
      //   if(res !== undefined)
      //   newArr.push(state.workers[i]);
      // }
      //   return {
      //     ...state,
      //     workers: newArr
      //   }
        alert('findWorker');
        return {...state};
    }

    default:
      return state
  }
};
