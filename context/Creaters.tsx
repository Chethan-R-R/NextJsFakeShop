import { createContext } from "react";
import { carttype, userDetails } from "../types";

type providervalue={
    user:userDetails
    
    usersetter:Function
    validate:Function
    
}
type cartprovider={
    cart:carttype[]
    addcart:Function
    removeItem:Function
}

const UserDetailsContext=createContext<providervalue>({
    //create context asks for default value so -->
    user:{
        firstname:"",
        lastname:"",
        email:"",
        phone:"",
        username:"",
        password:"",
        city:"",
        street:"",
        zipcode:""},usersetter:Function,validate:Function,
})

const CartDetailsContext=createContext<cartprovider>({cart:[{productId:1,quantity:1}],addcart:Function,removeItem:Function})
export {UserDetailsContext,CartDetailsContext}