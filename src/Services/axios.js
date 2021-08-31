import axios from 'axios'

const instance = axios.create({
  baseURL: "https://logistics-app-starks.herokuapp.com/api"
})

export default instance;
