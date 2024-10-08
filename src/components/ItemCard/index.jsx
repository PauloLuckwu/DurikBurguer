import React, { useState } from 'react'
import Button from '../Button'

function ItemCard({item}) {

    const [quantity, setQuantity] = useState(0);

    function submit() {
        console.log('adicionado no carrinho')
    }


  return (
    <div className='relative w-64 bg-white p-4 rounded-lg flex flex-col justify-between'>

        <img className='h-36 w-full object-cover rounded' src={item.imageUrl} alt=''></img>

        <h1 className='text-md text-slate-700 font-semibold mt-2'>{ item.name }</h1>
        <p className='text-xs text-slate-600'>{ item.description }</p>

        <div className='flex justify-between items-center mt-5'>
            {
                item.numOfEaters > 1 ?
                (
                    <p className='text-xs text-slate-600 font-medium'>Serve { item.numOfEaters } até pessoas</p>
                ) : (
                    <p className='text-xs text-slate-600 font-medium'>Serve para uma pessoa</p>
                )
            }

            <div className='flex flex-col items-end'>
                <p className={ item.priceWithDiscount ? 'line-through text-sm text-slate-600 font-medium' : 'text-lg text-slate-600 font-medium'}>{ 
                    item.price?.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }) 
                }</p>
                <p className={ item.priceWithDiscount ? 'text-green-500 text-lg font-medium' : ''}>{ 
                    item.priceWithDiscount?.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    })
                }</p>
            </div>
        </div>

        {/* ações */}
        <div className='flex justify-between mt-4'>
            {/* quantidade */}
            <div className='flex gap-2 items-center'>
                <button onClick={() => quantity > 0 && setQuantity(quantity - 1)} className='border-2 border-amber-400 rounded w-5 h-5'><p className='relative top-[-5px] text-amber-400'>-</p></button>
                <p>{ quantity }</p>
                <button onClick={() => quantity < item.quantityAvaiable && setQuantity(quantity + 1)} className='border-2 border-amber-400 rounded w-5 h-5'><p className='relative top-[-5px] text-amber-400'>+</p></button>
            </div>

            <Button 
                className="bg-amber-400 rounded px-3 py-1 text-slate-800 font-semibold text-xs cursor-pointer hover:bg-amber-500"
                onClick={submit}
            >
                <p>Adicionar +</p>
            </Button>
        </div>
    </div>
  )
}

export default ItemCard