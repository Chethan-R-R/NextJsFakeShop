'use client'
import {UserDetailsContext,CartDetailsContext} from './Creaters'
import {  useState } from 'react'
import { Children, carttype, login, userDetails } from '../types'


const GetSetUser=({children}:Children)=>{
    const [user,setUser]=useState<userDetails>({
        firstname:"",
    lastname:"",
    email:"",
    phone:"",
    username:"",
    password:"",
    city:"",
    street:"",
    zipcode:""
    })
    

    function usersetter(userDetails:userDetails){
        setUser(userDetails)
        return user
    }
    function validate({username,password}:login){
        if(username===user?.username && password===user.password)return true
        else return false
    }
    
    return(
        <UserDetailsContext.Provider value={{user,usersetter,validate   }}>
            {children}
        </UserDetailsContext.Provider>
    )
}

const GetSetCart=({children}:Children)=>{
    const [cart,setCart]=useState<carttype[]>([])
    function addcart(productId:number){
        let temp:carttype[]=[]
        if(cart.length===0){
            temp.push({productId:productId,quantity:1})
        }else{
            let isadded:boolean=false
            for(let i=0;i<cart.length;i++){
                if(cart[i].productId===productId && !isadded){
                    temp.push({productId:productId,quantity:cart[i].quantity+1})
                    isadded=true
                }else if(i===cart.length-1 && !isadded){
                    temp.push(cart[i])
                    temp.push({productId:productId,quantity:1})
                    isadded=true
                }else{
                    temp.push(cart[i])
                }
            }
        }
        setCart(temp)
    }
    function removeItem(productId:number){
        let temp:carttype[]=[]
        for(let i=0;i<cart.length;i++){
            if(cart[i].productId===productId &&cart[i].quantity===1){
                continue
            }else if(cart[i].productId===productId){
                temp.push({productId:productId,quantity:cart[i].quantity-1})
            }else temp.push(cart[i])
        }
        setCart(temp)
    }
    return(
        <CartDetailsContext.Provider value={{cart,addcart,removeItem}}>
            {children}
        </CartDetailsContext.Provider>
    )
}

export {GetSetUser,GetSetCart}