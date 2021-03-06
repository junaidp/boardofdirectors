import axios from 'axios'
const url = 'http://boardofdirectors.herokuapp.com/api/v1/person'
//export default class UserService {
// constructor() {}
export default {
  getUsers() {
    alert('getting')
    return axios.get(url).then(response => response.data)
  },
  saveUserBK(user) {
    return axios
      .post('http://localhost:3000/api/user', user)
      .then(response => response.data.message)
  },
  updateser(user) {
    return axios
      .post('http://localhost:3000/api/user', user)
      .then(response => response.data.message)
  },
  saveUser(user) {
    return axios.post(url, user).then(response => response.data.message)
  },
  deleteUser(userId) {
    return axios
      .delete('http://localhost:3000/api/user/' + userId)
      .then(response => response.data)
  }
}
