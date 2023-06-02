import React from 'react'
import { getCategories } from '../../../fetchers/product'
import { Children } from '../../../types'
import Link from 'next/link'
export default async function CategoryLayout({children}:Children) {
  const categories:string[]=await getCategories()
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
  //   return <Link href={`/category/${category}`} key={category} style={{textDecoration:'none'}}><p className={category} >{category}</p></Link>
  // })

  return (
    <div className='categorypage'>
      <div className='categories'>
        {categoriesList}
      </div>
      {children}
    </div>
  )
}

