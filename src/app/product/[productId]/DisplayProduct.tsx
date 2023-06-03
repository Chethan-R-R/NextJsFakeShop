'use client'
import React, { useContext, useEffect, useState } from 'react'
import { Product } from '../../../../types'
import Link from 'next/link'
import { CartDetailsContext } from '../../../../context/Creaters'
type props={
    product:Product
    children:JSX.Element[]
}
export default function DisplayProduct({product,children}:props) {
    const [buttonStatus,setButtonStatus]=useState("Add to cart")
    const usercontext=useContext(CartDetailsContext)
    function addtocart(){
        usercontext.addcart(product.id)
        setButtonStatus("Added to cart")
    }
    return (
    <div className='display'>
    <div className='displayproduct'>
        <img alt='' src={product.image} />
        
        <div className='displayproductdetails'>
            <h2>{product.title}</h2>
            <div>
                <Link href={`/category/${product.category}`} style={{textDecoration:"none"}}><p>{product.category}</p></Link>
                <h3>$ {product.price}</h3>
                <div className='ratings'>
                    <h4 className='starrating'>{product.rating.rate}&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 24 24"><path fill="gold" d="m5.825 22l2.325-7.6L2 10h7.6L12 2l2.4 8H22l-6.15 4.4l2.325 7.6L12 17.3L5.825 22Z"/></svg></h4>
                    <h4>{product.rating.count} Reviews</h4>
                </div>  
                <button onClick={addtocart}>{buttonStatus}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11 9V6H8V4h3V1h2v3h3v2h-3v3h-2ZM7 22q-.825 0-1.413-.588T5 20q0-.825.588-1.413T7 18q.825 0 1.413.588T9 20q0 .825-.588 1.413T7 22Zm10 0q-.825 0-1.413-.588T15 20q0-.825.588-1.413T17 18q.825 0 1.413.588T19 20q0 .825-.588 1.413T17 22ZM7 17q-1.125 0-1.725-.988T5.25 14.05L6.6 11.6L3 4H1V2h3.275l4.25 9h7.025l3.875-7l1.75.95l-3.875 7q-.275.5-.725.775T15.55 13H8.1L7 15h12v2H7Z"/></svg></button>
            </div>
            <h3>Product Description</h3>
            <p>{product.description}</p>
        </div>
    </div>
    <h2>Similar products</h2>
        <div className='productList'>
            {children}
        </div>
    </div>
  )
}
