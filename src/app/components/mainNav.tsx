'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Product } from '../../../types'
import { getProducts } from '../../../fetchers/product'
export default function MainNav() {
  const [keyword,setKeyword]=useState("")
  const [products,setProducts]=useState<Product[]>()
  const [serachReasult,setSearch]=useState<(JSX.Element | undefined)[] | undefined>()
  useEffect(()=>{
    async function fetchProducts() {
      const productsData:Product[]=await getProducts()
      setProducts(productsData)
    }
    fetchProducts()
  },[])

  useEffect(()=>{
    const search:(JSX.Element | undefined)[] | undefined=products?.map(product=>{
      
       if(product.title.toLowerCase().search(keyword.toLowerCase())!=-1) return <Link href={`/product/${product.id}`} style={{textDecoration:'none'}}><p>{product.title}</p></Link>
    })
    setSearch(search)
  },[keyword])
  return (
    <nav className='mainnav'>
        <Link className='logolink' href='/' style={{textDecoration:'none'}}>
        <div className='logo'>
        <Image className='cartlogo' src='/cart.png' alt="" width={110} height={50}/>
        <div className='logoname'>
        <p className='rr'>RR&nbsp;&nbsp;</p>
        <p className='shopping'>&nbsp;&nbsp;Shopping</p>
        </div>
        <div className='tires'>
        <Image className='tire' src='/tire.png' alt="" width={25} height={25}/>
        <Image className='tire' src='/tire.png' alt="" width={25} height={25}/>
        </div>
        </div>
        </Link>
        <div className='search'>
          <div className='searchinput'>
            <input type="text" placeholder='search' onChange={e=>{setKeyword(e.target.value)}} value={keyword} />
            <button ><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z"/></svg></button>
            <div className='searchresult' onClick={e=>setSearch(undefined)}>
            {serachReasult}
          </div>
          </div>
        </div>
    </nav>
  )
}
