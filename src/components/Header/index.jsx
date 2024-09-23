import React from 'react'
import { Person28Regular } from "@fluentui/react-icons";
import Navbar from '../Navbar'
import CartIcon from './Carticon'
import Button from '../Button'

  function Header() {
    return (
        <div class='flex justify-between items-center px-12 py-5 rounded-b-lg bg-white'>

            {/* navbar  */}
            <Navbar/>


            {/* logo */}
            <h2 class='text-2x1 font-bold'>Durok Burguer</h2>

            <div class='flex gap-5 items-center'>
                {/* botão login/registro */}
                <Button 
                        className="bg-amber-400 rounded px-3 py-2 text-slate-800 font-semibold text-sm cursor-pointer hover:bg-amber-500"
                        
                    >
                        {/* onClick={() => setShowAuthModal(!showAuthModal)} */}
                        <span className='mr-2'>Login / Registre-se</span>
                        <Person28Regular />
                </Button>

                {/* icone carrinho */}
                <CartIcon/>
            </div>
        </div>
    )
  }

export default Header