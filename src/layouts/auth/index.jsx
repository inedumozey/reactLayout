import React from 'react'
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import styled from 'styled-components'
import { useNavigate, Link } from "react-router-dom";

export default function Auth({ children }) {
    const navigate = useNavigate()
    return (
        <div>
            <BackArrow onClick={() => navigate(-1)}>
                <ArrowCircleLeftRoundedIcon />
            </BackArrow>
            <div>{children}</div>
        </div>
    )
}

const BackArrow = styled.span`
    cursor: pointer;
    display: inline-block;
    &:hover {
        opacity: .8;
    }
    padding: 10px ${({ theme }) => theme.lg_padding};
    @media (max-width: ${({ theme }) => theme.md_screen}){
        padding: 10px ${({ theme }) => theme.md_padding};
    }
    @media (max-width: ${({ theme }) => theme.sm_screen}){
        padding: 10px ${({ theme }) => theme.sm_padding};
    }
`