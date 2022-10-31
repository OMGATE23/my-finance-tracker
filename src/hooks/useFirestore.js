import { useState , useEffect , useReducer } from "react";

import { projectFirebase, timestamp } from "../firebase/config";

let initialState = {
    document: null,
    isPending: false,
    error: null,
    success: null
}

const firestoreReducer = (state, action) => {
    switch(action.type){

        case 'IS_PENDING':
            return {isPending: true, document: null, error: null, success: false}

        case 'ERROR':
            return {isPending: false, document: null, error : action.payload, success: false}

        case 'ADDED_DOCUMENT':
            return {isPending: false, document: action.payload, error: null, success: true}

        default:
            return state
    }
}


export default function useFirestore(collection) {
    const [response, dispatch] = useReducer(firestoreReducer, initialState)
    const[isCancelled, setIsCancelled] = useState(false)

    const dispatchIfNotCancelled = (action) => {
        if(!isCancelled){
            dispatch(action)
        }
    }

    const ref = projectFirebase.collection(collection)

    const addDocument = async(doc) => {
        dispatch({type: 'IS_PENDING'})

        try{
            const createdAt = timestamp.fromDate(new Date())
            const addedDocument = await ref.add({...doc , createdAt})

            dispatchIfNotCancelled({type: 'ADDED_DOCUMENT', payload: addedDocument})
        } catch(err){
            dispatchIfNotCancelled({type: 'ERROR', payload: err.message})
        }
        
    }

    const deleteDocument = async(id) => {

    }

    useEffect(() => {
        return () => setIsCancelled(true)
    } ,[])

    return {addDocument, deleteDocument, response }
  
}
