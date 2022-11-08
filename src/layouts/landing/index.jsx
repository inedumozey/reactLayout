import React, { useState } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';

export default function Landing({ children }) {
    const [openMenu, setOpenMenu] = useState(true);

    return (
        <div>
            <Header setOpenMenu={setOpenMenu} openMenu={openMenu} />
            <div onClick={() => setOpenMenu(false)}>{children}</div>
            <Footer setOpenMenu={setOpenMenu} />
        </div >
    )
}
