import { useState , useEffect, useRef } from "react";
import { projectFirebase } from "../firebase/config";

export const useCollection = (collection , _query , _orderBy) => {
    const [documents, setDocuments] = useState(null)
    const [error, setError] = useState(null)

    const query = useRef(_query).current
    const orderBy = useRef(_orderBy).current

    useEffect(() => {
        let ref = projectFirebase.collection(collection)

        if(query){
            ref = ref.where(...query)
        }

        if(orderBy){
            ref = ref.orderBy(...orderBy)
        }

        let unsub = ref.onSnapshot((snapshot) => {
            let results = []

            snapshot.docs.forEach((doc) => {
                results.push({...doc.data() , id: doc.id})
            })

            setDocuments(results)
            setError(null)
        } , (error) => {
            console.error(error.message)
            setError('Unable to fetch data')
        })

        return () => unsub()


    } ,[collection , query , orderBy])

    return {documents, error}
}