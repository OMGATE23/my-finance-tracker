import React, { useEffect } from 'react'
import { useState } from 'react'
import { projectAuth } from '../firebase/config'
import {useAuthContext} from './useAuthContext'

export default function useSignup() {

    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const {dispatch} = useAuthContext()
    const [isCancelled, setIsCancelled] = useState(false)

    const signup = async(email, password, displayName) => {
        setError(null)
        setIsPending(true)

        try{

            const res = await projectAuth.createUserWithEmailAndPassword(email, password)

            console.log(res.user)
            if(!res){
                throw new Error("Unable to create new user")
            }

            dispatch({
                type: 'LOGIN',
                payload: res.user
            })

            await res.user.updateProfile({displayName})

            if(!isCancelled){
                setIsPending(false)
                setError(null)
            }
            

        } catch(err){

            if(!isCancelled){
                console.error(err.message)
                setError(err.message)
                setIsPending(false)
            }
            
        }
    }

    useEffect(() => {
        return () => setIsCancelled(true)
    } , [])
  return {error , isPending, signup}
}
