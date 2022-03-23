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

export const addElectricalEquipment = async ({
    name,
    type,
    watts,
    number
}) => {
    return await api.post('/equipments/add', {
        name,
        type,
        watts,
        number
    }).then((response) => response).catch((error) => {
        return error.response
    })
}

export const addElectricalBill = async ({
    amount,
    date
}) => {
    return await api.post('/electricalBills/add', {
        amount,
        date
    }).then((response) => response).catch((error) => {
        return error.response
    })
}

export const addMeterReading = async ({
    meterReading,
    date
}) => {
    return await api.post('/meterReadings/add', {
        meterReading,
        date
    }).then((response) => response).catch((error) => {
        return error.response
    })
}

export const getEquipments = async () => {
    return await api.post('/equipments/getEquipments').then((response) => response).catch((error) => {
        return error.response
    })
}

export const getElectricalBills = async () => {
    return await api.post('/electricalBills/getElectricalBills').then((response) => response).catch((error) => {
        return error.response
    })
}

export const getMeterReadings = async () => {
    return await api.post('/meterReadings/getMeterReadings').then((response) => response).catch((error) => {
        return error.response
    })
}

export const deleteEquipment = async (equipmentId) => {
    return await api.delete(`/equipments/deleteEquipment/${equipmentId}`).then((response) => response).catch((error) => {
        return error.response
    })
}

export const editEquipment = async (equipmentId) => {
    return await api.patch(`/equipments/updateEquipment/${equipmentId}`).then((response) => response).catch((error) => {
        return error.response
    })
}

export const getEquipment = async (equipmentId) => {
    return await api.get(`/equipments/getEquipment/${equipmentId}`, {
        equipmentId
    }).then((response) => response).catch((error) => {
        return error.response
    })
}

export const deleteBill = async (billId) => {
    return await api.delete(`/electricalBills/deleteElectricalBill/${billId}`).then((response) => response).catch((error) => {
        return error.response
    })
}

export const deleteMeterReading = async (readingId) => {
    return await api.delete(`/meterReadings/deleteMeterReading/${readingId}`).then((response) => response).catch((error) => {
        return error.response
    })
}

