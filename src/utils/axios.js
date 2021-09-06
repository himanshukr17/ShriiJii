import axios from 'axios';
import {store} from "../redux/store";



// Next we make an 'instance' of it
const state = store.getState();

const instance = axios.create({
// .. where we make our configurations
    baseURL: ''
});
instance.defaults.timeout = 5000
// Where you would set stuff like your 'Authorization' header, etc ...
instance.defaults.headers.common['Authorization'] = state.auth.authToken

// Also add/ configure interceptors && all the other cool stuff



export default instance;