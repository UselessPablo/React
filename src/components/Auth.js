import React from 'react'
import 'firebase/auth'
import { useState } from 'react'
import { useEffect } from 'react';
import {auth} from '../utils/Config'


export const AuthContext = React.createContext();
export const AuthProvider = ({children})=>{
    const [currentUser, setCurrentUser]=useState(null)

useEffect(() =>{
    auth.onAuthStateChanged(setCurrentUser);
},[])


return(
    <AuthContext.Provider
    value={{
        currentUser
    }}
>
    {children}
</AuthContext.Provider>
)
}
