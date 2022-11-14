import React, { useEffect } from 'react'
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom';
import logout from '../../utils/logout';
import refreshToken from '../../utils/refreshToken';

export default function UserDashboard() {
    const navigate = useNavigate();

    useEffect(() => {
        if (!Cookies.get('refreshtoken')) {
            navigate("/auth/signin")
        }
    }, [])


    return (
        <div>User Dashboard
            <div style={{ cursor: 'pointer' }} onClick={logout}>Logout</div>
            <button onClick={refreshToken}>Refresh Token</button>
        </div>
    )
}


