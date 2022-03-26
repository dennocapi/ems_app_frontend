import axios from 'axios';

const api = axios.create({
    baseURL: 'https://energy-management-app-backend.herokuapp.com',
    headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': 'https://energy-management-app-backend.herokuapp.com',
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

export const addElectricalEquipment = async (equipment) => {
    return await api.post('/equipments/add', equipment).then((response) => response).catch((error) => {
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

export const editEquipment = async (equipment) => {
    console.log('Equipment -------', equipment)
    let equipmentId = equipment.equipmentId
    return await api.patch(`/equipments/updateEquipment/${equipmentId}`, equipment).then((response) => response).catch((error) => {
        return error.response
    })
}

export const editElectricalBill = async (electricalBill) => {
    let electricalBillId = electricalBill.electricalBillId
    return await api.patch(`/electricalBills/updateElectricalBill/${electricalBillId}`, electricalBill).then((response) => response).catch((error) => {
        return error.response
    })
}

export const editMeterReading = async (meterReading) => {
    let meterReadingId = meterReading.meterReadingId
    console.log('meter reading ', meterReading)
    return await api.patch(`/meterReadings/updateMeterReading/${meterReadingId}`, meterReading).then((response) => response).catch((error) => {
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

