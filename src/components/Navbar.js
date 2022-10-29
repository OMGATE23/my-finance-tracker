import React from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import styles from './navbar.module.css'

export default function Navbar() {
  const {logout} = useLogout()
  return (
    <nav>
        
        <ul className={styles['nav-list']}>

            <li><h1 className={styles['nav-header']}>My Finance Tracker</h1></li>
            <li>
                <Link to="/login">Login</Link>
            </li>

            <li>
                <Link to="/signup">Signup</Link>
            </li>

            <li>
              <button className='btn' onClick={logout}>logout</button>
            </li>
        </ul>
    </nav>
  )
}
