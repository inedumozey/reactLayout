import React, { useContext } from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom';
import { Context } from '../../../context/Context';


export default function Aside({ headerHeight, expandedAside, shrinkedAside, isExpanded, setExpanded }) {
    return (
        <AsideStyle
            headerHeight={headerHeight}
            expandedAside={expandedAside}
            shrinkedAside={shrinkedAside}
            isExpanded={isExpanded}
        >
            <div onClick={() => setExpanded(!isExpanded)} className="handle"></div>
            Aside
        </AsideStyle>
    )
}


const AsideStyle = styled.div`
    position: fixed;
    padding: 20px 20px 20px 15px;
    top: ${({ headerHeight }) => headerHeight};
    transition: ${({ theme }) => theme.transition};
    width: ${({ shrinkedAside }) => shrinkedAside};
    width: ${({ isExpanded, expandedAside, shrinkedAside }) => isExpanded ? expandedAside : shrinkedAside};
    display: flex;
    flex-direction: column;

    align-items: center;
    background: #fff;
    box-shadow: 0 0 5px rgb(18 23 39 / 50%);
    left: 0;
    z-index: 2;
    height: ${({ headerHeight }) => `calc(100vh - ${headerHeight})`};

    @media (max-width: ${({ theme }) => theme.md_screen}){
        width: ${({ isExpanded, expandedAside, shrinkedAside }) => isExpanded ? shrinkedAside : expandedAside};
        left: ${({ isExpanded, expandedAside, shrinkedAside }) => isExpanded ? `-100%` : 0};
    }

    .handle{
        width: 5px;
        height: 100%;
        position: absolute;
        top:0;
        bottom: 0;
        right: 0;
        background: var(--gray-pale);

        &:hover {
            cursor: e-resize
        }
    }
`