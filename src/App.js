import React from 'react'
import { BrowserRouter, Route, Routes , Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'


//components
import Navbar from './components/Navbar'

import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'

export default function App() {
  const {user, authIsReady} = useAuthContext()
  return (
    <div>
      {authIsReady && (
          <BrowserRouter>

              <Navbar/>
              <Routes>
                
                  <Route exact path='/' element = {user ? <Home/> : <Navigate to ='/login'/>}>
                      
                  </Route>

                  <Route path='/login' element = {user ? <Navigate to ='/'/> : <Login/>}>
                      
                  </Route>

                  <Route path = '/signup' element = {user ? <Navigate to ='/'/> : <Signup/>}>
                      
                  </Route>
              </Routes>
          
          </BrowserRouter>
        )}

    </div>
  )
}
