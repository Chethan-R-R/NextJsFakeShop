
import { Cart, Product } from '../../../../types'
import { getProduct, getProductsCategory } from '../../../../fetchers/product'
import ProductDisplay from '@/app/components/ProductDisplay'
import DisplayProduct from './DisplayProduct'
import { GetSetCart } from '../../../../context/Providers'

type params={
    params:{productId:string}
}
export default async function Page({params:{productId}}:params) {
    
    const product:Product=await getProduct(productId)
    const similar:Product[]=await getProductsCategory(product.category)
    const similarList=similar.map(product=>{
        /* @ts-expect-error Server Component */
        return <ProductDisplay key={product.id} product={product}/>
    })
    if(product){

      return (
        <DisplayProduct product={product}>{similarList}</DisplayProduct>
      )
    }else{
        return(
        <h1>Loading....</h1>
        )
    }
}
