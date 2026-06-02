import React from 'react'
import './Typography.css';

export const H1 = ({ children, className = '' }) => {
    return (
        <h1 className={`heading-h1 ${className}`}>{children}</h1>
    )
}

export const H2 = ({ children, className = "" }) => {
    return (
        <h2 className={`heading-h2 ${className}`}>{children}</h2>
    )
}

export const H4 = ({ children, className = "" }) => {
    return (
        <h2 className={`heading-h4 ${className}`}>{children}</h2>
    )
}

export const ParagraphNormal = ({ children, className = "" }) => {
    return (
        <p className={`paragraph-normal ${className}`}>{children}</p>
    )
}

export const ParagraphSmall = ({ children, className = "" }) => {
    return (
        <p className={`paragraph-small ${className}`}>{children}</p>
    )
}

export const ParagraphSubtitle = ({ children, className = "" }) => {
    return (
        <p className={`paragraph-subtitle ${className}`}>{children}</p>
    )
}

