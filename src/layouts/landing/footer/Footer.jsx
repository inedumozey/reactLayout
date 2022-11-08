import React from 'react'

export default function Footer({ setOpenMenu }) {
    return (
        <div onClick={() => setOpenMenu(false)}>Footer</div>
    )
}
