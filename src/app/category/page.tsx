import React from 'react'
import {  getProducts } from '../../../fetchers/product'
import { Product } from '../../../types'
import ProductDisplay from '../components/ProductDisplay'
export default async function page() {
  const products:Product[]=await getProducts()
  const productsList=products.map(product=>{
     /* @ts-expect-error Server Component */
    return  <ProductDisplay key={product.id} product={product} />
  })
  return (   
      <div className='productList'>
        {productsList}
      </div>
  )
}

export async function generateStaticParams() {
  const products:Product[]=await getProducts()
  return products
}
