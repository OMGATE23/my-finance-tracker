import React, { useEffect, useState } from 'react'

import styles from './login.module.css'

export default function Login() {
  const [passwordType, setPasswordType] = useState('password')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [icon, setIcon] = useState('./visibility.svg')

  function visibilityHandler(){
    setIcon(prev => {
      if(prev === './visibility.svg'){
        return './visibility_off.svg'
      } else {
        return './visibility.svg'
      }
    })

    setPasswordType(prev => {
      if(prev ==='password'){
        return 'text'
      } else {
        return 'password'
      }
    })
  }

  function submitHandler(e){
    e.preventDefault()
    console.log(email, password)
  }

  return (
    <div className={styles['form-div']}>
      <form className={styles['login-form']} onSubmit = {
        (e) => submitHandler(e)
      }>
        <h2>Login Page</h2>
        
          
          <input 
            placeholder='Email ID' 
            required 
            type='text'
            onChange={(e) => setEmail(e.target.value)}
            value = {email}
            />
      
        <div className={styles['password-container']}>

          <input 
            placeholder='Password'
            required 
            type={passwordType}
            onChange = {e => setPassword(e.target.value)}
            value = {password}
           />

          <span
              className={styles['visibility-img']}
              onClick = {visibilityHandler}
            ><img  src={icon} />
          </span>
          
        </div>
        


        

        <button value='Submit' className={styles['submit-btn']}>Submit</button>
        
      </form>
    </div>
  )
}
