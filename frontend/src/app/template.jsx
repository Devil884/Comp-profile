'use client';
import React from 'react'
import { UserProvider } from '../context/UserContext';



const Template = ({ children }) => {
    return (
        <div>
            <UserProvider>
                {children}
            </UserProvider>
        </div>
    )
}

export default Template
