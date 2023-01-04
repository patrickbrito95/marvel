import axios from 'axios'

const apiMarvel = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/'
})
export default apiMarvel