import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import  Accueil  from '../pages/Accueil'
import  Home  from '../pages/Home'
import  Singlepage  from '../pages/Singlepage'
import  About  from '../pages/About'
import  Error from '../pages/Error'
import  ConnectPages  from '../pages/Connect'
import Login from '../pages/auth/login'
import Signup from '../pages/auth/signup'
import {AnimatePresence} from 'framer-motion'

function AnimatedRoutes() {
    const location = useLocation();
  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Accueil />} />
            <Route path='/Simplepage/:id' element={<Singlepage />} />
            <Route path='/Home/:id' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/Connect' element={<ConnectPages  />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Signup' element={<Signup />} />
            <Route path='*' element={ <Error />} />
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes