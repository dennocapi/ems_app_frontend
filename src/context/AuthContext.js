import React, { useContext, useState } from 'react'

const AuthContext = React.createContext()

const useAuth = () => {
    return useContext(AuthContext)
}
 
const AuthProvider = ({ childeren }) => {
    const [currentUser, setCurrentUser] = useState()

    // function signup(email, companyName,location,password) {
    //     return auth.createUserWithEmailAndPassword(email, companyName,location,password)
    // }

    const value = {
        currentUser
    }
    return (
        < AuthContext.Provider value ={value}>
            {childeren}
        </ AuthContext.Provider>
    )
}

export default { AuthProvider, useAuth }