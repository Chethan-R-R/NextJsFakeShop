
import React, { useContext, useEffect, useState } from 'react'
import { Cart, Product } from '../../../types'
import { getuserCart } from '../../../fetchers/cart'
import SingleCart from './SingleCart'
import { getProducts } from '../../../fetchers/product'
import { CartDetailsContext } from '../../../context/Creaters'

export default function CartItems() {
    const cartcontext=useContext(CartDetailsContext)
    console.log(cartcontext.cart.length)
    
  if(cartcontext.cart.length!=0){
    const cartlist=cartcontext.cart.map(cartData=>{
      
      return <SingleCart key={cartData.productId} product={cartData}  />
    })
    return (
      <div className='cartlist  '>{cartlist}</div>
    )
  }
  else{
    return(
      <div className='emptycart'>
        <h3>Looks like your cart is empty...</h3>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="M10 0v4H8l4 4l4-4h-2V0M1 2v2h2l3.6 7.6L5.2 14c-.1.3-.2.6-.2 1c0 1.1.9 2 2 2h12v-2H7.4c-.1 0-.2-.1-.2-.2v-.1l.9-1.7h7.4c.7 0 1.4-.4 1.7-1l3.9-7l-1.7-1l-3.9 7h-7L4.3 2M7 18c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m10 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Z"/></svg>
      </div>
    )
  }
}
