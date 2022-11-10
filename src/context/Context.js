import react, { useState, useEffect, createContext } from 'react';

const Context = createContext()

const state = {
    contact: {
        email: 'admin@extractcoinmart.com',
        mobile: '+1(918) 280-8396',
        address: '9Co Meath C15 T26E 14 Mullaghaboy Industrial Estate, Plymouth, Indiana',
        name: 'Extratcoinmart'
    },
    info: {
        footerWord: 'We are the only Company offering accessible and secure Cloud-Mining solutions to everyone. We strive to ensure that Cryptocurrency remains decentralized by contributing to the network whilst sharing most of the gained mining incentives with our customers.',
        secure: `Secure and Easy way to`,
        invest: 'Invest'
    }
}

export { Context, state }