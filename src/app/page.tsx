import React from 'react'
import { Product } from '../../types'
import { getCategories, getProducts } from '../../fetchers/product'
import ProductDisplay from './components/ProductDisplay'
import { title } from 'process'
import Link from 'next/link'
export default async function Home() {
  const products:Product[]=await getProducts()
  const categories:string[]=await getCategories()
  const ListProducts=products.map(product=>{
    /* @ts-expect-error Server Component */
    return <ProductDisplay key={product.id} product={product}/>
  })
  var categoriesList:JSX.Element[]=[]
  categoriesList.push(
    <Link href="https://github.com/Chethan-R-R" key="About" style={{textDecoration:'none'}}><p className="about" >About</p></Link>
  )
  for(let i=0;i<categories.length;i++){
    const category=categories[i]
    categoriesList.push(
      <Link href={`/category/${category}`} key={category} style={{textDecoration:'none'}}><p className={category} >{category}</p></Link>
    )
  }
  // const categoriesList=categories.map(category=>{
  //   return <Link href={`/category/${category}`} key={category} style={{textDecoration:'none'}}><p className='category'>{category}</p></Link>
  // })
  return (
    <div className='categorypage'>
      <div className='categories'>
        {categoriesList}
      </div>
    <div className='productList'>
      {ListProducts}
    </div>
    </div>
  )
}

export async function generateStaticParams() {
  const products:Product[]=await getProducts()
  return products
}

