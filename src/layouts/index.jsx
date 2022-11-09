import React, { } from 'react'
import Admin from './admin';
import User from './user';
import LandingPage from './landing';
import Auth from './auth';
import Certificate from './certificate'
import { useLocation } from "react-router-dom";


export default function Layout({ children }) {
    const location = useLocation();

    return (
        (function () {
            if (location.pathname.includes('/dashboard')) {
                return <User children={children} />
            }
            else if (location.pathname.includes('/admin')) {
                return <Admin children={children} />
            }
            else if (location.pathname.includes('/auth')) {
                return <Auth children={children} />
            }
            else if (location.pathname === '/certificate') {
                return <Certificate children={children} />
            }
            else {
                return <LandingPage children={children} />
            }
        }())
    )
}
