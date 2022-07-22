import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://us-central1-clone-app-f2ce3.cloudfunctions.net/api'
    //'http://localhost:5001/clone-app-f2ce3/us-central1/api'
});

export default instance;