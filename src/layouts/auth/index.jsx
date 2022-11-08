import React from 'react'

export default function Auth({ children }) {
    return (
        <div>
            <div>Header</div>
            <div>{children}</div>
        </div>
    )
}
