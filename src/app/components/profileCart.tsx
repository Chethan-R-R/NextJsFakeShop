'use client'
import React, { Suspense, useState } from 'react'
import DisplayUser from './DisplayUser'
import CartItems from './CartItems'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'
import { GetSetCart, GetSetUser } from '../../../context/Providers'
export default function ProfileCart() {
    const [profile,setProfile]=useState(true)
    const [loggedin,setLoggedin]=useState(false)
    const handleLoggin=()=>{
        setLoggedin(true)
    }   
  if(loggedin){
    return (

        <div className='profile'>
            <nav>
                <div onClick={()=>{setProfile(true)}} className='profilenav' style={profile?{borderBottom:'solid #F9F54B 5px',color:'yellow'}:{}}>
                    <h3>Profile</h3>
                </div>
                <div onClick={()=>{setProfile(false)}} className='cartnav' style={profile?{}:{borderBottom:'solid #F9F54B 5px',color:'yellow'}}>
                    <h3>cart</h3>
                </div>
            </nav>
            <Suspense fallback={<h1>Loding...</h1>}>
            {/* @ts-expect-error Server Component */}
            {profile? <DisplayUser />:<CartItems />}
            </Suspense>
        </div>
      )
  }else{
    return (
        <div className='profile'>
            <nav>
                <div onClick={()=>{setProfile(true)}} className='profilenav' style={profile?{borderBottom:'solid #F9F54B 5px',color:'yellow'}:{}}>
                    <h3>Login</h3>
                </div>
                <div onClick={()=>{setProfile(false)}} className='cartnav' style={profile?{}:{borderBottom:'solid #F9F54B 5px',color:'yellow'}}>
                    <h3>Register</h3>
                </div>
            </nav>
            <Suspense fallback={<h1>Loding...</h1>}>

            {profile? <LoginPage handleLoggin={handleLoggin}/>:<RegisterPage />}
            </Suspense>
        </div>

      )
  }
}
