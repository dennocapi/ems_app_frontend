import React, { useEffect } from 'react'
import { logout } from '../api/apis'
import { userStore } from '../store/stores';

const Logout = () => {
    const storeUser = userStore(state => state.storeUser);
    useEffect(() => {
        logout().then((response) => {
            // if (response.status === 200) {
                storeUser(null)
                console.log("Logout response 1----------------")
                console.log(response)
                window.location.href = '/signin'
            // }
            // else{
            //     console.log("Logout response 2----------------")
            //     console.log(response)
            // }
        })
    }, [])
    return (
        <div></div>
    )
}

export default Logout