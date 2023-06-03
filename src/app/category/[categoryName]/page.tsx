import React from 'react'
import { getCategories, getProductsCategory } from '../../../../fetchers/product'
import { Product } from '../../../../types'
import ProductDisplay from '@/app/components/ProductDisplay'
type params={
    params:{
        categoryName:string
    }
}
export default async function Page({params:{categoryName}}:params) {
  const products:Product[]=await getProductsCategory(categoryName)
  const ListProducts=products.map(product=>{
    /* @ts-expect-error Server Component */
    return <ProductDisplay key={product.id} product={product}/>
  })
  return (
    <div className='productList'>
      {ListProducts}
    </div>
  )
}

export async function generateStaticParams() {
  const categories:string[]=await getCategories()
  return categories.map(category=>(
    {
        categoryName:category
    }
  ))
}

