import React, { ChangeEventHandler,MouseEventHandler } from 'react'
type props={
    handlechange:ChangeEventHandler<HTMLInputElement>
    handleSubmit:MouseEventHandler<HTMLButtonElement>
    allfilled:boolean
}
export default function Registerform(props:props) {
  return (
    <form className='registerform' action='' method='POST' >
        <div className='firstlast'>
            <div>
            <label htmlFor='firstname'>First Name</label>
            <input id="firstname" type='text' name='firstname'  onChange={props.handlechange}/>
            </div>
            <div>
            <label htmlFor='lastname'>Last Name</label>
            <input id="lastname" type='text' name='lastname' onChange={props.handlechange} />
            </div>
        </div>
        <div className='formdata'>
        <label htmlFor='email'>Email</label>
        <input id="email" type='text' name='email' onChange={props.handlechange}/>
        </div>
        <div className='formdata'>
        <label htmlFor='phone'>Phone Number</label>
        <input id="phone" type='text' name='phone' onChange={props.handlechange} />
        </div>
        <div className='formdata'>
        <label htmlFor='username'>Username</label>
        <input id="username" type='text' name='username'  onChange={props.handlechange}/>
        </div>
        <div className='formdata'>
        <label htmlFor='password'>Password</label>
        <input id="password" type='text' name='password' onChange={props.handlechange}/>
        </div>
        <div className='formdata'>
        <label htmlFor='city'>City</label>
        <input id="city" type='text' name='city' onChange={props.handlechange}/>
        </div>
        <div className='formdata'>
        <label htmlFor='street'>Street</label>
        <input id="street" type='text' name='street' onChange={props.handlechange} />
        </div>
        <div className='formdata'>
        <label htmlFor='zipcode'>Zip COde</label>
        <input id="zipcode" type='text' name='zipcode' onChange={props.handlechange}/>
        </div>
        <button onClick={props.handleSubmit}>{props.allfilled?"Register":"Fill all blanks"}</button>
    </form>
  )
}
