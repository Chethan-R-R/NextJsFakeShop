
import React from 'react'
import './globals.css'
import Profile from './components/profileCart'
import { Children } from '../../types'
import MainNav from './components/mainNav'
import MainNavMob from './components/mainNavMob'
import { GetSetCart, GetSetUser } from '../../context/Providers'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'rrshopping',
  description: 'a shopping website user can add products to his cart and search for products',
};
export default function RootLayout({children}:Children) {
  return (
    <html>
      <head>
      </head>
      <body>
      <GetSetCart>
        <GetSetUser>
      <div className='root'>
      <div className='pcmain'>
      <MainNav />
      {children}  
    </div>
    
    <div className='mobmain'>  
      <MainNavMob />
      {children}
    </div>
    <input type='checkbox' id='profilecontrol' />
    <label className='btnprofilecontrol' htmlFor='profilecontrol'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M3 8h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2Zm18 8H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Zm0-5H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Z"/></svg></label>
    
    <Profile/>
      </div>
      </GetSetUser>
      </GetSetCart>
      </body>
    </html>
  )
}
