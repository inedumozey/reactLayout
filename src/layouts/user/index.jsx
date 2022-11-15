import styled from 'styled-components'
import React, { useState, useEffect } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import Aside from './aside/Aside';

const headerHeight = '63px'
const expandedAside = '200px'
const shrinkedAside = '40px'

export default function User({ children }) {
    const [isExpanded, setExpanded] = useState(true)
    return (
        <Wrapper>
            <Header
                headerHeight={headerHeight}
                isExpanded={isExpanded}
                setExpanded={setExpanded}
            />

            <Aside
                expandedAside={expandedAside}
                shrinkedAside={shrinkedAside}
                headerHeight={headerHeight}
                isExpanded={isExpanded}
                setExpanded={setExpanded}
            />

            <MainStyle
                shrinkedAside={shrinkedAside}
                headerHeight={headerHeight}
                isExpanded={isExpanded}
            >
                <MainContent headerHeight={headerHeight}>
                    <div style={{ width: '100px', height: '100px', background: '#aaa' }}>Main</div>
                </MainContent>
                <FooterStyle headerHeight={headerHeight}>Footer</FooterStyle>
            </MainStyle>
        </Wrapper>
    )
}


const Wrapper = styled.div`
`
const MainStyle = styled.div`;
    position: absolute;
    top: ${({ headerHeight }) => `calc(${headerHeight} - 5px)`};
    right: 400px;
    transition: ${({ theme }) => theme.transition};
    width:  ${({ shrinkedAside, isExpanded }) => isExpanded ? '100vw' : `calc(100vw - ${shrinkedAside} + 5px)`};
    align-items: center;
    background: var(--gray-pale);
    left: ${({ isExpanded }) => isExpanded ? `calc(${expandedAside} - 5px)` : `calc(${shrinkedAside} - 5px)`};
    min-height: ${({ headerHeight }) => `calc(100vh - ${headerHeight} + 5px)`};

    @media (max-width: ${({ theme }) => theme.md_screen}){
        left: ${({ isExpanded }) => isExpanded ? `0` : `calc(${expandedAside} - 5px)`};
    }
`

const MainContent = styled.div`
    width: 100%;
    min-height: ${({ headerHeight }) => `calc(100vh - ${headerHeight} - ${headerHeight})`};
    background: var(--gray-pale);
    padding: 15px ${({ theme }) => theme.lg_padding};
    @media (max-width: ${({ theme }) => theme.md_screen}){
        padding: 15px ${({ theme }) => theme.md_padding};
    }
    @media (max-width: ${({ theme }) => theme.sm_screen}){
        padding: 15px ${({ theme }) => theme.sm_padding};
    }
`
const FooterStyle = styled.div`
    width: 100%;
    height: ${({ headerHeight }) => headerHeight};
    background: var(--gray-light);

    padding: 15px ${({ theme }) => theme.lg_padding};
    @media (max-width: ${({ theme }) => theme.md_screen}){
        padding: 15px ${({ theme }) => theme.md_padding};
    }
    @media (max-width: ${({ theme }) => theme.sm_screen}){
        padding: 15px ${({ theme }) => theme.sm_padding};
    }
`