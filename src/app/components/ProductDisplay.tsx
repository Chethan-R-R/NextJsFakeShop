
import React from 'react'
import { Product } from '../../../types'
import Image from 'next/image'
import Link from 'next/link'
type props={
    key:number
    product:Product
}
export default async function ProductDisplay({product}:props) {
  
  return (
    <Link href={`product/${product.id}`} style={{textDecoration:'none'}}>
    <div className='singleproduct'>
      <p>{product.category}</p>
      <img  alt="" src={product.image} width={150} height={180} />
      <div className='productdetails'>
        <p >{product.title}</p>
        <div>
          <h4>$ {product.price}</h4> 
          <p className='productrating'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 24 24"><path fill="gold" d="m5.825 22l2.325-7.6L2 10h7.6L12 2l2.4 8H22l-6.15 4.4l2.325 7.6L12 17.3L5.825 22Z"/></svg>{product.rating.rate}</p>
        </div>
      </div>
      
    </div>
    </Link>
  )
}
