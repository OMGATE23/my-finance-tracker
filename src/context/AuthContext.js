import React from 'react'
import { createContext , useReducer , useEffect } from 'react'

export const AuthContext = createContext()

export const authReducer = (state, action) => {
    switch(action.type){

        case 'LOGIN':
            return {...state, user: action.payload}
            break;
        
        case 'LOGOUT':
            return {user: null, ...state}
            break;
        default:
            return state
    }
}

export default function AuthContextProvider({children}) {

    const [state, dispatch] = useReducer( authReducer, {
        user: null
    })

    useEffect(() => {
        console.log("Logged in user: ", state)
    }, [state])
    
  return (
    <AuthContext.Provider value = {{...state, dispatch}}>
        {children}
    </AuthContext.Provider>
  )
}
