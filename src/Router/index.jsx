import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from '../components/Header'
import Menu from '../Pages/Menu'
import Orders from '../Pages/Orders'

function Router() {
  return (
    <>
        <Header />

        <Routes>
                <Route exac path='/' element={<Menu/>}/>
                <Route exac path='/:filter?' element={<Menu/>}/>
                <Route exac path='/ordes' element={<Orders/>}/>
        </Routes>
    </>
  )
}

export default Router