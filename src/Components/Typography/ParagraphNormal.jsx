import React from 'react'
import './Typography.css';

export const ParagraphNormal = ({ children, className = "" }) => {
    return (
        <p className={`paragraph-normal ${className}`}>{children}</p>
    )
}