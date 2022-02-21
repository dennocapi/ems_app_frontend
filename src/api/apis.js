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

export const home = async () => {
    return await api.get('/').then((response) => response).catch((error) => {
        return error.response
    })
}

export const logout = async () => {
    return await api.post('/users/logout').then((response) => response).catch((error) => {
        return error.response
    })
}

export const addElectricalBill = async ({ amount, date}) => {
    return await api.post('/electricalBills/add', { amount, date }).then((response) => response).catch((error) => {
        return error.response
    })
}

export const getEquipments = async () => {
    return await api.post('equipments/getEquipments').then((response) => response).catch((error) => {
        return error.response
    })
}

export const getElectricalBills = async () => {
    return await api.post('/electricalBills/getElectricalBills').then((response) => response).catch((error) => {
        return error.response
    })
}

export const getMeterReadings = async () => {
    return await api.post('meterReadings/getMeterReadings').then((response) => response).catch((error) => {
        return error.response
    })
}
