import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_BASEURL,
    headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': process.env.REACT_APP_BASEURL,
    },
    withCredentials: true
})


export const registerUser = async (user) => {

    return await api.post('/users/register', user).then((response) => response).catch((error) => {
        return error.response
    })
}

export const loginUser = async (user) => {

    return await api.post('/users/login', user).then((response) => response).catch((error) => {
        return error.response
    })


}

export const refreshToken = async () => {
    return await api.get('/users/refreshSession').then((response) => response).catch((error) => {
        return error.response
    })
}