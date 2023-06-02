
import React, { useContext, useEffect, useState } from 'react'
import { UserDetailsContext } from '../../../context/Creaters'


export default  function DisplayUser() {
    const user=useContext(UserDetailsContext).user
    if(user){
  return (
    <div className='userprofile'>
        <div className='profilelogo'>
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2Z"/><path d="M4.271 18.346S6.5 15.5 12 15.5s7.73 2.846 7.73 2.846M12 12a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z"/></g></svg>
        <h2>{user.firstname}&nbsp;{user.lastname}</h2>
        </div>
        
        <div className='address'>
            <h3>Email: {user.email}</h3>
            <h3>Phone: {user.phone}</h3>
            <h3>Address: {user.city}</h3>
            <h3>Zip-code: {user.zipcode}</h3>
            <h3>street: {user.street}</h3>
        </div>

    </div>
  )
}else{
    <h1>Trying to fetch data</h1>
}
}
