import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { MDBContainer, MDBCol, MDBRow, MDBCheckbox } from 'mdb-react-ui-kit';
import styled from 'styled-components';
import VpnKeyRoundedIcon from '@mui/icons-material/VpnKeyRounded';
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import Btn from '../Btn/Btn';
import Cookies from "js-cookie";

export default function ForgotPasswordRequest_C() {
    const [showPassword, setShowPassword] = useState(false);

    const intitialState = { email: '', }

    const [inp, setInpt] = useState(intitialState);

    // get form input
    const getInput = (e) => {
        const { name, value } = e.target;
        setInpt({ ...inp, [name]: value })
    }

    // submit form
    const submit = (e) => {
        e.preventDefault();
        console.log(inp)
    }

    return (
        <Wrapper>
            <MDBContainer fluid className="p-3h-custom">
                <h3 style={{ textAlign: 'center', color: 'var(--blue)', fontSize: '1rem' }}>FORGOT PASSWORD</h3>
                <MDBRow>

                    <MDBCol col='10' md='6'>
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" />
                    </MDBCol>

                    <MDBCol col='4' md='6'>

                        <form style={{ margin: "10px 0" }} onSubmit={submit}>

                            <InputWrapper>
                                <InputIcon right="" left="0">
                                    <EmailRoundedIcon />
                                </InputIcon>
                                <input
                                    type="text"
                                    name="email"
                                    autoFocus
                                    value={inp.email || ''}
                                    placeholder="Email/Username"
                                    onInput={getInput}
                                />
                            </InputWrapper>

                            <div className='text-center text-md-start mt- pt-2'>
                                <Btn color="var(--blue)">Submit</Btn>
                            </div>

                        </form>

                    </MDBCol>

                </MDBRow>

            </MDBContainer>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 0 ${({ theme }) => theme.lg_padding} 20px 0;
    @media (max-width: ${({ theme }) => theme.md_screen}){
        padding: 0 ${({ theme }) => theme.md_padding} 20px 0;
    }
    @media (max-width: ${({ theme }) => theme.sm_screen}){
        padding: 0 ${({ theme }) => theme.sm_padding} 20px 0;
    }
`

const InputWrapper = styled.div`
    width: 100%;
    height: 45px;
    margin-bottom: 15px;
    position: relative;
    
    
    input {
        border: 1px solid #ccc;
        padding: 12px 30px 12px 30px;
        height: 100%;
        width: 100%;
        display: block;
        border-radius: 8px;
        font-size: .9rem;

        &: focus{
            outline: none;
            border: 2px solid var(--blue);;
        }
    } 

    input[type="submit"]{
        border-radius: 20px;
        color: #fff;
        border: none;
        font-size: 1rem;
        font-weight: bold;
        cursor: pointer;
        background: var(--blue);
    }
`

const InputIcon = styled.div`
    position: absolute;
    padding: 3px;
    width: 30px;
    z-index: 1;
    bottom: 0;
    left: ${({ left }) => left};
    right: ${({ right }) => right};
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: var(--blue);
`