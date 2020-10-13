import React, { createContext, useState } from 'react'

export const UserContext = createContext();

export const UserContextProvider = props => {
    const [token, setToken] = useState('null')
    const [id, setId] = useState(null)
    const [username, setUsername] = useState(null)

    const logout = () => {
        setToken(null)
        setId(null)
        setUsername(null)
    }


    return (
        <UserContext.Provider 
        value={{token, setToken, id, setId, username, setUsername}}
        >
            {props.children}
        </UserContext.Provider>
    )
}