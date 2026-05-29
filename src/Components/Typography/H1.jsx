import React from 'react'
import './Typography.css';

export const H1 = ({ children, className = '' }) => {
    return (
        <h1 className={`heading-h1 ${className}`}>{children}</h1>
    )
}
