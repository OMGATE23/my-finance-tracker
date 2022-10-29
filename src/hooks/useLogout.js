import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { projectAuth } from "../firebase/config";

export const useLogout = () => {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const {dispatch} = useAuthContext()

    const logout = async() => {
        setIsPending(true)
        setError(false)

        try {
            await projectAuth.signOut()

            dispatch({ type : 'LOGOUT'})

            setIsPending(false)
            setError(null)

        } catch(err){
            console.error(err.message)
            setError(err.message)
            setIsPending(false)
        }
    }

    return {error, isPending, logout}
}