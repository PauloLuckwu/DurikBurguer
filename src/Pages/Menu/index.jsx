import React, { useState } from 'react'
import { allproducts } from '../../mock/Products'
import Restauranteinfo from '../../components/Restauranteinfo'
import Search from '../../components/Header/Search'
import Pills from '../../components/Pills'
import ItemCard from '../../components/ItemCard'
import { useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

function Menu() {

    // States
    const [products, setProducts] = useState([])

    // react Rounter Dom (filtros e pesquisa)
    const { filter } = useParams();
    const [searchParams, serSearchParams] = useSearchParams();

    // montagem da aplicação
    useEffect(() => {
        setProducts(allproducts)
    }, [])

    // Construção de pilulas
    const uniqueProductTypes = new Set();
    const pills = allproducts.map((product) => {
      if(!uniqueProductTypes.has(product.type)){
        uniqueProductTypes.add(product.type);
        return product.type;
      }
    }).filter((type) => type !==undefined);



    function searchProducts(query) {
      // converter tudo para minusculo
      const queryLowerCase = query.toLowerCase();
  
      // Filtrando os produtos
      const filteredProducts = allproducts.filter(product => {
          // Convertendo nome na lista em minusculo para alinhar com a funcao searchProducts 
          const productNameLowerCase = product.name.toLowerCase();
          // buscando item mais aproximado na lista com a pesquisa
          return productNameLowerCase.includes(queryLowerCase);
      });
  
      // Retornando o array filtrado
      return filteredProducts;
  }
      // faz a pesquisa pelo filtro
      function filterProducts(type) {
        return allproducts.filter(product => product.type === type);
  }

    // montagem da aplicação
    useEffect(() => {
      setProducts(allproducts)
    }, [])

    // comparador do search params
    useEffect(() => {
      if(searchParams.get('search')) {
          setProducts(searchProducts(searchParams.get('search')))
      } else {
          setProducts(allproducts)
      }
  }, [searchParams])

    // comparador dos filtros
  useEffect(() => {
      if(filter) {
          setProducts(filterProducts(filter))
      } else {
          setProducts(allproducts)
      }
  }, [filter])

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