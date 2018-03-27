import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-6c7f8.firebaseio.com/'
});

export default instance;