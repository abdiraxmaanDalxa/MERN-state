import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Singin from './components/Singin'
import SingUp from './components/SingUp'
import About from './components/About'
import Profile from './components/Profile'
import Home from './components/Home'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/singin" element={<Singin />}></Route>
      <Route path="/sing-up" element={<SingUp />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
