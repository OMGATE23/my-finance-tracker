import React from 'react'
import styles from './home.module.css'
import TransactionForm from './TransactionForm'
import {useAuthContext} from '../../hooks/useAuthContext'
import { useCollection } from '../../hooks/useCollection'
import TransactionList from './TransactionList'

export default function Home() {
  const {user} = useAuthContext()
  const {documents, error} = useCollection(
    'transactions', 
    ['uid' , '==' , user.uid],
    ['createdAt' , 'desc']
    )

  
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {user && <p>Welcome, {user.displayName}!</p>}
        {error ? <p>{error}</p> : null}
        {documents ? <TransactionList transactions = {documents} /> : null}
      </div>

      <div className={styles.sidebar}>
        
        <TransactionForm uid= {user.uid}/>
      </div>
    </div>
  )
}
