import React from 'react'
import { getCategories, getProducts } from '../../../fetchers/product'
import { Product } from '../../../types'
import Link from 'next/link'
import ProductDisplay from '../components/ProductDisplay'
export default async function page() {
    const categories:string[]=await getCategories()
    const products:Product[]=await getProducts()
    const categoriesList=categories.map(category=>{
        return <Link href={`/category/${category}`} key={category} style={{textDecoration:'none'}}><p className={category} >{category}</p></Link>
    })
    const productList=products.map(product=>{
        /* @ts-expect-error Server Component */
        return <ProductDisplay key={product.id} product={product}/>
    })
  return (

    <div className='categorypage'>
        <div className='categories'>
            {categoriesList}
        </div>
        <div className='productList'>
            {productList}
        </div>
    </div>
  )
}

export async function generateStaticParams() {
    const products:Product[]=await getProducts()
    return products
}
