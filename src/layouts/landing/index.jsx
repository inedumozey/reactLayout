import React, { useState } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import { useLocation } from "react-router-dom";

export default function Landing({ children }) {
    const location = useLocation();
    const [openMenu, setOpenMenu] = useState(false);
    const isHomeRoute = location.pathname === '/'
    const headerHeight_full = '100vh'
    const headerHeight_mid = '77.8vh'
    const footerHeight = '300px'

    return (
        <div>
            <div
                style={{
                    width: '100vw',
                    height: `${isHomeRoute ? headerHeight_full : headerHeight_mid}`
                }}
            >
                <Header setOpenMenu={setOpenMenu} openMenu={openMenu} />
            </div>

            <div
                style={{
                    width: '100vw',
                    height: `${isHomeRoute ? `calc(${headerHeight_full - footerHeight})` : `calc(${headerHeight_mid - footerHeight})`}`
                }}
                onClick={() => setOpenMenu(false)}>
                {children}
            </div>

            <div
                style={{
                    width: '100vw',
                    minHeight: footerHeight,
                }}
                onClick={() => setOpenMenu(false)}
            >
                <Footer />
            </div>
        </div >
    )
}
