import {
    SET_MODE,
    DEL_WORKER,
    ADD_WORKER,
    EDIT_WORKER_MODE,
    EDIT_WORKER_SAVE,
    FIND_WORKER
} from './actionTypes';

export const setMode = mode => ({type: SET_MODE, mode});

export const delWorker = id => ({type: DEL_WORKER, id});

export const addWorker = newWorker => ({type: ADD_WORKER, newWorker});

export const editWorkerMode = id => ({type: EDIT_WORKER_MODE, id});

export const editWorkerSave = (id, text) => ({type: EDIT_WORKER_SAVE, id, name});

export const findWorker = text => ({type: FIND_WORKER, text});
