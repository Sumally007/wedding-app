import React from 'react'
import './Typography.css';

export const H4 = ({ children, className = "" }) => {
    return (
        <h2 className={`heading-h4 ${className}`}>{children}</h2>
    )
}
