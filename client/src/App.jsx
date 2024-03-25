import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Singin from './pages/Singin'
import SingUp from './pages/SingUp'
import About from './pages/About'
import Profile from './pages/Profile'
import Home from './pages/Home'
import Header from './components/Header'

function App() {
  return (
    <BrowserRouter>
    <Header />
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
