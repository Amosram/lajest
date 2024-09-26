import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Devices from './pages/Devices'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import SingleDevice from './pages/SingleDevice'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='app overflow-hidden'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/devices' element={<Devices/>} />
        <Route path='/device/:deviceId' element={<SingleDevice/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App