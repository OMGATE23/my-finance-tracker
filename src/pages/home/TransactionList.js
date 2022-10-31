import React from 'react'
import useFirestore from '../../hooks/useFirestore'
import styles from './home.module.css'

export default function TransactionList({transactions}) {
  const {deleteDocument} = useFirestore('transactions')
  
  return (
    <ul className={styles.transactions}>

        {transactions.map((transaction , index) => {
          
            return (
                <li key={transaction.id}>
                    <p className={styles.name}>{index + 1}. {transaction.name}</p>
                    
                    <p className={styles.amount}>Rs. {transaction.amount}</p>

                    <button onClick={() => deleteDocument(transaction.id)}>X</button>
                </li>
            )
        })}

    </ul>
  )
}
