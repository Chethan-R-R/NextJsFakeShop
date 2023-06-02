import React, { ChangeEvent, Dispatch, useContext, useState } from 'react'
import { loginUser } from '../../../fetchers/user'
import { UserDetailsContext } from '../../../context/Creaters'
type props={
  handleLoggin:() => void
}
export default function LoginPage({handleLoggin}:props) {
  const userContext=useContext(UserDetailsContext)
  const [loginData,setLoginData]=useState({
    username:"",
    password:""
  })
  const [loginStatus,setLoginStatus]=useState("please Login to get cart Items")
  function login() {
    const res=userContext.validate(loginData)
    res?handleLoggin():setLoginStatus("User name and password does not match")
  }
  const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
    setLoginData(prev=>({
      ...prev,[e.target.name]:e.target.value
    }))
  }
  const handleLogin=()=>{
    login()
  }
  return (
    <div className='loginpage'>
      <div className='logindata'>
      <p className='loginstatus'>{loginStatus}</p>
        <div>
        <label htmlFor='username'>Username</label>
        <input type='text' name="username" id="username" onChange={handleChange}/>
        </div>
        <div>
        <label htmlFor='password'>Password</label>
        <input type='text' name="password" id="password" onChange={handleChange}/>
        </div> 
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  )
}
