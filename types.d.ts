import { type } from "os"

type Children={
    children:React.ReactNode
}

type User={
  address:{
    geolocation:{
      lat:string,
      long:string
  },
    city:string,
    street:string,
    number:number,
    zipcode:string,
    
},
  id:number,
  email:string,
  username:string,
  password:string,
  name:{
      firstname:string,
      lastname:string,
  },
  
  phone:string,
  __v:number
}
type Product={
  id:number,
  title:string,
  price:string,
  description:string,
  category:string,
  image:string
  rating:{rate:number,count:number}
}
type Cart={
  id:number,
  userId:number,
  date:string,
  products:{productId:number,quantity:number}[],
  __v:number
}
type formdata={ 
  city:string,
  email:string,
  firstname:string,
  lastname:string,
  password:string,
  phone:string,
  street:string,
  username:string,
  zipcode:string,
}
type login={
  username:string
  password:string
}
type userDetails={
  firstname:string,
          lastname:string,
          email:string,
          phone:string,
          username:string,
          password:string,
          city:string,
          street:string,
          zipcode:string
}

type carttype={
  productId:number,
  quantity:number
}