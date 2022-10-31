import React from 'react'
import styles from './home.module.css'
import TransactionForm from './TransactionForm'
import {useAuthContext} from '../../hooks/useAuthContext'
import { useCollection } from '../../hooks/useCollection'
import TransactionList from './TransactionList'

export default function Home() {
  const {user} = useAuthContext()
  const {documents, error} = useCollection('transactions', ['uid' , '==' , user.uid])

  
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {error ? <p>{error}</p> : null}
        {documents ? <TransactionList transactions = {documents} /> : null}
      </div>

      <div className={styles.sidebar}>
        
        <TransactionForm uid= {user.uid}/>
      </div>
    </div>
  )
}
