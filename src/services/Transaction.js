import axios from './Axios'

export const Transaction = {

  list () {
    return axios.get(`/transactions`)
  },

  add (data) {
    return axios.post('/transactions', data)
  }
}