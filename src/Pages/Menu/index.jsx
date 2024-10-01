import React from 'react'
import Restauranteinfo from '../../components/Restauranteinfo'
import Search from '../../components/Header/Search'

function Menu() {
  return (
    <div class='py-8 px-40'>
        <h1></h1>
        {/* informaçoes do restaurante */}
        <Restauranteinfo/>
        {/* search */}
        <Search/>
        {/* pills */}
        {/* Itemcard */}
    </div>
  )
}

export default Menu