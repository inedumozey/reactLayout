import React, { useEffect } from 'react'

import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom'

export default function AboutUs() {
    const navigate = useNavigate();

    useEffect(() => {
        if (Cookies.get('refreshtoken')) {
            navigate("/dashboard")
        }
    }, [])

    return (
        <div>
            About Us Page
        </div>
    )
}
