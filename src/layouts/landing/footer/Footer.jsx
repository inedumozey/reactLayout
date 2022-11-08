import React from 'react'
import styled from 'styled-components'
import { Link, useLocation } from "react-router-dom";

export default function Footer() {
    const location = useLocation();
    const isAboutUsRoute = location.pathname === '/about-us'

    return (
        <FooterStyle>
            <div className="top">hello top</div>
            <div className="bottom">hello bottom</div>
        </FooterStyle>
    )
}


const FooterStyle = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 ${({ theme }) => theme.lg_padding};
    @media (max-width: ${({ theme }) => theme.md_screen}){
        padding: 0 ${({ theme }) => theme.md_padding};
    }
    @media (max-width: ${({ theme }) => theme.sm_screen}){
        padding: 0 ${({ theme }) => theme.sm_padding};
    }
`