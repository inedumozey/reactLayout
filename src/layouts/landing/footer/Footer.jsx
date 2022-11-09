import React from 'react'
import styled from 'styled-components'
import { Link, useLocation } from "react-router-dom";

export default function Footer() {
    const location = useLocation();
    const isAboutUsRoute = location.pathname === '/about-us'

    return (
        <FooterStyle>
            <div className="top">
                <div className="overlay">hello top</div>
            </div>
            <div className="bottom">
                &copy; {(new Date()).getFullYear() > 2022 ? `2022 - ${(new Date()).getFullYear()}` : (new Date()).getFullYear()} &nbsp; <span style={{ color: 'var(--yellow)' }}>Extratcoinmart </span>  &nbsp; All Right Reserved
            </div>
        </FooterStyle>
    )
}


const FooterStyle = styled.div`
    width: 100%;
    height: 100%;

    .top {
        height: calc(100vh - 98px);
        background: url('/hero3.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;

        &:after {
            position: absolute;
            content: '';
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background: rgba(255, 255, 255, .95)
        }

    }

    .bottom {
        height: 98px;
        width: 100%;
        background: var(--gray-light);
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: .9rem;
        padding: 0 ${({ theme }) => theme.lg_padding};
        @media (max-width: ${({ theme }) => theme.md_screen}){
            padding: 0 ${({ theme }) => theme.md_padding};
        }
        @media (max-width: ${({ theme }) => theme.sm_screen}){
            padding: 0 ${({ theme }) => theme.sm_padding};
        }
    }
`