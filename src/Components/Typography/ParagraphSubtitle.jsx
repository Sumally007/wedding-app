import React from 'react'
import './Typography.css';

export const ParagraphSubtitle = ({ children, className = "" }) => {
    return (
        <p className={`paragraph-subtitle ${className}`}>{children}</p>
    )
}