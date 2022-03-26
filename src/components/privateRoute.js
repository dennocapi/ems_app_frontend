import React from 'react'
import { userStore } from '../store/stores'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
    const user = userStore(state => state.user)
    const storeUser = userStore(state => state.storeUser)
    // if(user){
    //     if(user.status) {
    //         if(user.status !== 200){
    //             storeUser(null)
    //         }
    //     }
    // }
    console.log('-------------------------', user)
    const myTimeout = setTimeout(() => {
        return user ? <Outlet /> : <Navigate to="/signin" />
    },1200)
    console.log('My timeout---------------------------------------', myTimeout)
    return myTimeout
    
}
export default PrivateRoute