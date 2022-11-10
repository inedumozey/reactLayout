import styled from 'styled-components';
import React, { useState, useEffect, useContext } from 'react'
import { Link, useNavigate, useParams } from "react-router-dom";
import { Context } from '../../context/Context';



export default function VerifyEmail_C() {
    const { contact } = useContext(Context)
    const navigate = useNavigate()
    const { token } = useParams()
    const [loading, setLoading] = useState(true)
    const [fetched, setFetched] = useState(false)
    const time = 7000
    const time2 = 500000

    setTimeout(() => {
        setLoading(false)
    }, time)

    // Simulate api call
    useEffect(() => {
        if (!loading) {
            setTimeout(() => {
                setFetched(true)
            }, time)
        }
    }, [loading])

    useEffect(() => {
        if (fetched) {
            setTimeout(() => {
                navigate('/dashboard')
            }, time2)
        }
    }, [fetched])

    return (
        <VerifyWrapper>
            {(function () {
                // preparing to call verify api
                if (loading) {
                    return <>
                        <h3 style={{ textAlign: 'center' }}>Welcome to {contact.name}!</h3>
                        <div style={{ textAlign: 'center' }}>Wait while we activate your accout</div>
                        <h4 style={{ textAlign: 'center' }}>Loading...</h4>
                        <div className="img">
                            <img style={{ width: '100%', height: '100%' }} src="/verify-email1.gif" />
                        </div>
                    </>
                }

                // start calling verify api
                if (!loading && !fetched) {
                    return <>
                        <h3 style={{ textAlign: 'center' }}>Welcome to {contact.name}!</h3>
                        <div style={{ textAlign: 'center' }}>Almost there</div>
                        <h4 style={{ textAlign: 'center' }}>Loading...</h4>
                        <div className="img">
                            <img style={{ width: '100%', height: '100%' }} src="/verify-email2.gif" />
                        </div>
                    </>
                }

                // verification succeeded or failed
                if (!loading && fetched) {
                    return <>
                        <h3 style={{ textAlign: 'center' }}>Congratulations!</h3>
                        <div style={{ textAlign: 'center' }}>Your account is activated. You will be redirected to your dashboard in few seconds or <Link to="/dashboard">click here</Link> to continue</div>
                        <div className="img">
                            <img style={{ width: '100%', height: '100%' }} src="/check2.png" />
                        </div>
                    </>
                }
            }())}

        </VerifyWrapper>
    )
}


const VerifyWrapper = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    flex-direction: column;
    padding: 50px ${({ theme }) => theme.lg_padding};
    @media (max-width: ${({ theme }) => theme.md_screen}){
        padding: 50px ${({ theme }) => theme.md_padding};
    }
    @media (max-width: ${({ theme }) => theme.sm_screen}){
        padding: 50px ${({ theme }) => theme.sm_padding};
    }

    .gif {
        width: 20%;
        height: 20%;
        max-width: 150px;
        max-height: 150px;
        min-width: 100px;
        min-height: 100px;
    }

    .img {
        width: 20%;
        height: 20%;
        max-width: 150px;
        max-height: 150px;
        min-width: 100px;
        min-height: 100px;
    }
`