import Urls from '../constants/Urls'
import axios from 'axios'

//getAllWorkers
export const GetWorkers = () => {
  return axios.get(Urls.getWorkers)
}

//Update worker
export const UpdateWorker = selectedWorker => {
  return axios.put(Urls.updateWorker + selectedWorker._id, selectedWorker)
}

// Delete Worker
export const DelWorker = id => {
  return axios.delete(Urls.delWorker + id)
}

// Add Worker
export const AddWorker = newWorker => {
  return axios.post(Urls.addWorker, newWorker)
}
