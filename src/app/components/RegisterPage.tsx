import React, { use, useState } from 'react'
import Registerform from './Registerform'
import { useContext } from 'react'
import { UserDetailsContext } from '../../../context/Creaters'
export default function RegisterPage() {
    const userContext=useContext(UserDetailsContext)
    const [formdata,setFormdata]=useState({
        firstname:"",
        lastname:"",
        email:"",
        phone:"",
        username:"",
        password:"",
        city:"",
        street:"",
        zipcode:"",
    })
    const [registerSuccessfull,setSuccessfull]=useState<object | undefined>()

    const [allfilled,setAllfilled]=useState(true)

     function insertUser() {
        const res=userContext.usersetter(formdata)
        setSuccessfull(res)
    }
    
    const handlechange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        if(e.target.value==="")e.target.style.borderBottom="solid red"
        else e.target.style.borderBottom="solid #6C00FF"
        setFormdata(prev=>({
            ...prev,[e.target.name]:e.target.value
        }))
    }
    const handleSubmit=(e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault()
        if(formdata.city.length!=0 && formdata.email.length!=0 && formdata.firstname.length!=0 && formdata.lastname.length!=0 && formdata.password.length!=0 && formdata.phone.length!=0 && formdata.street.length!=0 && formdata.username.length!=0 && formdata.zipcode.length!=0){
            setAllfilled(true)
            
            insertUser()
        }else{
            
            setAllfilled(false)
        }
    }
    if(registerSuccessfull){
        return(
            <h2 className='registersuccess'>Register Succssfull Now Login</h2>
        )
    }else{
        return(
            <Registerform handlechange={handlechange} handleSubmit={handleSubmit} allfilled={allfilled} />
        )
    }
}
