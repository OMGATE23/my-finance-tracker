import React, { useEffect, useState } from 'react'

import styles from './login.module.css'

export default function Login() {
  const [passwordType, setPasswordType] = useState('password')
  const [visibility, setVisibility] = useState(true)

  function visibilityHandler(){
    setVisibility(prev => !prev)

    setPasswordType(prev => {
      if(prev ==='password'){
        return 'text'
      } else {
        return 'password'
      }
    })
  }

  return (
    <form className={styles['login-form']}>
      <h2>Login Page</h2>
      <label className={styles['label-id']}>
        <span>Email ID: </span>
        <input type='text'></input>
      </label>

      <div className={styles['password-container']}>
        <label className={styles['label-password']}>
          <span>Password: </span>
          <input type={passwordType}></input>       
        </label>
        { visibility && <span
            className={styles['visibility-img']}
            onClick = {visibilityHandler}
           ><img  src='./visibility.svg' /></span>}
        { !visibility && <span 
            className={styles['visibility-img']}
            onClick = {visibilityHandler}
            ><img  src='./visibility_off.svg' /></span>}
      </div>
      


      

      <input type = "submit" value='Submit' className={styles['submit-btn']}></input>
      
    </form>
  )
}
