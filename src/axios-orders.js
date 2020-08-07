import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-5b7d1.firebaseio.com/'
})

export default instance;