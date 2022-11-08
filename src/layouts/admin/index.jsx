
import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import Aside from './aside/Aside';

export default function Admin({ children }) {
    return (
        <div>
            <Header />
            <Aside />
            <div>{children}</div>
            <Footer />
        </div>
    )
}
