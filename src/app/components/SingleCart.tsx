import React, { MouseEventHandler, useContext, useEffect, useState } from 'react'
import { Cart, Product } from '../../../types'
import { getProduct } from '../../../fetchers/product'
import Image  from 'next/image'
import { CartDetailsContext } from '../../../context/Creaters'
type props={
  key:number
  product:{productId:number,quantity:number}
}
export default function SingleCart({product}:props) {
  const [productdetails,setProduct]=useState<Product>()
  const cartContext=useContext(CartDetailsContext)
  useEffect(()=>{
    async function fetchproduct() {
      const productdata:Product=await getProduct(product.productId.toString())
      setProduct(productdata)
    }
    fetchproduct()
  },[])

  function handleClick(e:React.MouseEvent<HTMLButtonElement, MouseEvent>){
    if(e.currentTarget.id==="add"){
      cartContext.addcart(product.productId)
    }else if(e.currentTarget.id==="remove"){
      cartContext.removeItem(product.productId)
    }
  }
  
  if(productdetails){
  return (
    <div className='singlecart'>
      <div className='productimg'>
        <Image loader={() => productdetails.image} alt="" src={productdetails.image} width={60} height={70} />
      </div>
      <div className='addremove'>
          <button onClick={handleClick} id='add'>+</button>
          <h4>{product.quantity}</h4>
          <button onClick={handleClick} id='remove'>-</button>
        </div>
      <div className='cartproductdetails'>
        <h4>{productdetails.title}</h4>
        <h4><svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 24 24"><path fill="gold" d="m5.825 22l2.325-7.6L2 10h7.6L12 2l2.4 8H22l-6.15 4.4l2.325 7.6L12 17.3L5.825 22Z"/></svg>{productdetails.rating.rate}</h4>
        <h4>$&nbsp;{+productdetails.price*product.quantity}</h4>
      </div>
    </div>
  )
  }
  else{
    return(
      <>
      <h4>Lodaing...</h4>
      </>
    )
  }
}
