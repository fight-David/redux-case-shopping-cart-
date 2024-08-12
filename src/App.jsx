import { useState } from 'react'
import './App.css'
import ReduxTest from './components/redux-test'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Cart from './pages/cart'
import Header from './components/header'

function App() {

  return (
    <div>
      {/* <ReduxTest /> */}
      <Header></Header>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
      </Routes>
    </div>
  )
}

export default App
