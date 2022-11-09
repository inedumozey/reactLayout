import react, { useState, useEffect, createContext } from 'react';

const Context = createContext()

const state = {
    contact: {
        email: 'admin@extractcoinmart.com',
        mobile: '+1(918) 280-8396',
        address: '9Co Meath C15 T26E 14 Mullaghaboy Industrial Estate, Plymouth, Indiana'
    },
}

export { Context, state }