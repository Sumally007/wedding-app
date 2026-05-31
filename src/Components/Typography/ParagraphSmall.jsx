import React from 'react'
import './Typography.css';

export const ParagraphSmall = ({ children, className = "" }) => {
    return (
        <p className={`paragraph-small ${className}`}>{children}</p>
    )
}