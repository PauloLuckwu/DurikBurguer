import React, { useState } from 'react'
import { allproducts } from '../../mock/Products'
import Restauranteinfo from '../../components/Restauranteinfo'
import Search from '../../components/Header/Search'
import Pills from '../../components/Pills'
import ItemCard from '../../components/ItemCard'
import { useEffect } from 'react'

function Menu() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(allproducts)
    }, [])

    const uniqueProductTypes = new Set();
    const pills = allproducts.map((product) => {
      if(!uniqueProductTypes.has(product.type)){
        uniqueProductTypes.add(product.type);
        return product.type;
      }
    }).filter((type) => type !==undefined);


  return (
    <div class='py-8 px-40'>
        <h1></h1>

        {/* informaçoes do restaurante */}
        <Restauranteinfo/>

        {/* search */}
        <Search/>

        {/* pills */}
        <Pills types={ pills }/>

        {/* Itemcard */}
        <div className='flex gap-5 flex-wrap justify-center mt-10'>
           { products.map((item, index) => <ItemCard key={index} item={item} />) }
        </div>
    </div>
  )
}

export default Menu