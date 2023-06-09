'use client'
import React, { use } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState,useEffect } from 'react'
import { getProducts } from '../../../fetchers/product'
import { Product } from '../../../types'
export default function MainNavMob() {
  const [keyword,setKeyword]=useState("")
  const [products,setProducts]=useState<Product[]>()
  const [serachReasult,setSearch]=useState<(JSX.Element |undefined )[]|undefined>()
  useEffect(()=>{
    async function fetchProducts() {
      const productsData:Product[]=await getProducts()
      setProducts(productsData)
    }
    fetchProducts()
  },[])

  useEffect(()=>{
    const search:(JSX.Element | undefined)[] |undefined=products?.map(product=>{
      if(product.title.toLowerCase().search(keyword.toLocaleLowerCase())!=-1)return <Link href={`/product/${product.id}`} key={product.id} style={{textDecoration:'none'}}><p>{product.title}</p></Link>
    })
    setSearch(search)
  },[keyword])
  return (
    <nav className='mainnavmob'>
        <Link className='logolinkmob' href='/' style={{textDecoration:'none'}}>
        <div className='logomob'>
        <Image className='cartlogomob' src='/cart.png' alt="" width={75} height={35}/>
        <div className='logonamemob'>
        <p className='rrmob'>RR&nbsp;&nbsp;</p>
        <p className='shoppingmob'>&nbsp;&nbsp;Shopping</p>
        </div>
        <div className='tiresmob'>
        <Image className='tiremob' src='/tire.png' alt="" width={18} height={18}/>
        <Image className='tiremob' src='/tire.png' alt="" width={18} height={18}/>
        </div>
        </div>
        </Link>
        <div className='searchmob'>
          <div className='searchinput'>
            <input type="text" placeholder='search' onChange={e=>{setKeyword(e.target.value)}} value={keyword} />
            <button ><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25"><path fill="black" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z"/></svg></button>
            <div className='searchresult' onClick={e=>setSearch(undefined)} >
            {serachReasult}
          </div>
          </div>
          
        </div>
          
    </nav>
  )
}
