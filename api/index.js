import axios from 'axios'

export function api(url, method) {
  return axios({
    method: method,
    url: url
  })
    .then(response => {
      return response.data
    })
    .catch(error => {
      throw error
    })
}
