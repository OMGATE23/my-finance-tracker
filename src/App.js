import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

//components
import Navbar from './components/Navbar'
import Home from './files/home/Home'
import Login from './files/login/Login'
import Signup from './files/signup/Signup'

export default function App() {
  return (
    <div>
        <BrowserRouter>

            <Navbar/>
            <Routes>
                <Route exact path='/' element = {<Home/>}>
                    
                </Route>

                <Route path='/login' element = {<Login/>}>
                    
                </Route>

                <Route path = '/signup' element = {<Signup/>}>
                    
                </Route>
            </Routes>
        
        </BrowserRouter>

    </div>
  )
}
