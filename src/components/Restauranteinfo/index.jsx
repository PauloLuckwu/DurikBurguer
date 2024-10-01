import React from 'react'
import { Star28Filled } from '@fluentui/react-icons'

function Restauranteinfo() {

  return (
    <div className='my-8 flex items-center justify-center'>
        <div className='flex'>
            <div className='relative'>
                <img
                    src=''
                    alt=''
                    className='h-20 w-20 rounded-full object-cover object-center'
                ></img>

            </div>
            
            <div className='ml-5 flex flex-col justify-center'>
                <div className='flex gap-4'>
                    <h1 className='font-bold text-xl text-slate-700'>Durok Burguer</h1>
                    <span className='flex gap-1 text-center text-slate-700'>
                        <Star28Filled className='text-amber-400' />
                        4.23
                    </span>
                    <span className='text-green-500'>
                        $$
                    </span>
                </div>
            </div>

        </div>

    </div>
)
}

export default Restauranteinfo 