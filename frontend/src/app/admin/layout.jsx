import React from 'react'
import AdminNavbar from './navbar'
import Sidebar from './sidebar'

const Layout = ({ children }) => {
    return (
        <>
            <AdminNavbar />
            <Sidebar>
                {children}
            </Sidebar>
        </>
    )
}

export default Layout