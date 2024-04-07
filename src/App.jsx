import React from 'react'
import { Route, Routes } from 'react-router'
import './App.css'
import Contact from '../Pages/Contact'
import Home from '../Pages/Home'
import Navbar from './Components/Layout/Navbar'
import Footer from './Components/Layout/Footer'
import NotFound from '../Pages/NotFound'
import Products from '../Pages/Products'
import Responsive from './assets/Responsive'
import ShortCut from './assets/ShortCut'
import DarkMode from './assets/DarkMode'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/products' element={<Products />} />
      <Route path='*' element={<NotFound />} />
      </Routes>
      <ShortCut/>
      <DarkMode/>
      <Responsive/>
      <Footer />
    </div>
  )
}

export default App