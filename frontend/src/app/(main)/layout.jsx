import React from 'react'
import Navbar from './navbar'


const Layout = ({ children }) => {
    return (
        <>
        <Navbar/>
       <div className='mt-12'>
        {children}
        </div>
           
        </>
    )
}

export default Layout