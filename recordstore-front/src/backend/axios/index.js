/* eslint-disable */
import axios from 'axios';

const API_URL = 'http://localhost:8081';
const secruedAxiosInstance = axios.create({
    baseURL: API_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
})

const plainAxiosInstance = axios.create({
    baseURL: API_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
})

secruedAxiosInstance.interceptors.request.use(config => {
    const method = config.method.toUpperCase();
    if (method !== 'OPTIONS' && method !== 'GET') {
        config.headers = {
            ...config.headers,
            'X-CSRF-TOKEN': localStorage.csrf
        }
    }
    return config;
});

secruedAxiosInstance.interceptors.response.use(null, error => {
    if (error.response && error.response.config && error.response.status === 401) {
        return plainAxiosInstance.post('/refresh', {}, { headers: {'X-CSRF-TOKEN': localStorage.csrf }})
        .then(response => {
            localStorage.csrf = response.data.csrf
            localStorage.signedIn = true

            let retryConfig = error.response.config
            retryConfig.headers['X-CSRF-TOKEN'] = localStorage.csrf
            return plainAxiosInstance.request(retryConfig)
        }).catch(error => {
            delete localStorage.csrf
            delete localStorage.signedIn

            location.replace('/')
            return Promise.reject(error)
        })
    } else {
        return Promise.reject(error)
    }
})

export {secruedAxiosInstance, plainAxiosInstance }