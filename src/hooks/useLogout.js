import { useEffect, useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { projectAuth } from "../firebase/config";

export const useLogout = () => {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const {dispatch} = useAuthContext()
    const [isCancelled, setIsCancelled] = useState(false)

    const logout = async() => {
        setIsPending(true)
        setError(null)

        try {
            await projectAuth.signOut()

            dispatch({ type : 'LOGOUT'})

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

    return {error, isPending, logout}
}