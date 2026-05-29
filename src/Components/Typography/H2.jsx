import React from 'react'
import './Typography.css';

export const H2 = ({ children, className = "" }) => {
    return (
        <h2 className={`heading-h2 ${className}`}>{children}</h2>
    )
}
