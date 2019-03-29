import axios from 'axios'

export const baseAPI = axios.create({
    baseURL: process.env.HOST + '/api',
    timeout: 10000,
    withCredentials: true,
    transformRequest: [(data) => JSON.stringify(data)],
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
});