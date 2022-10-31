import React, { useEffect, useState } from 'react'
import useFirestore from '../../hooks/useFirestore'

export default function TrasactionForm({uid}) {
    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const{addDocument, response} = useFirestore('transactions')

    const submitHandler = (e) => {
        e.preventDefault()
        addDocument({
            uid,
            name,
            amount
        })


    }

    useEffect(() => {
        if(response.success){
            setAmount('')
            setName('')
        }
    } ,[response.success])
    
  return (
    <form onSubmit={(e) =>submitHandler(e)}>
        <h3>Add a Transaction</h3>
        <div>
            <label>
                <span>Transaction name: </span>
                <input 
                    type='text'
                    required
                    onChange={(e) => setName(e.target.value)}
                    value = {name}
                />
            </label>
        </div>

        <div>
            <label>
                <span>Amount (INR): </span>
                <input 
                    type='number'
                    required
                    onChange={(e) => setAmount(e.target.value)}
                    value = {amount}
                />
            </label>
        </div>
        
        <button className='btn'>Submit</button>
    </form>
  )
}