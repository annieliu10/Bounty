import React from 'react'
import "./button.css";

const STYLES = [
    "btn--primary--solid",
    ]

const SIZES = ["btn-medium", "btn--small"]

export const Button = ({children, type, onClick, buttonStyle, buttonSize}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)

    return (
       <button className={'btn ${checkButtonStyle} ${checkButtonSize} '}
       onClick={onClick}
       type={type}
       >
        {children}
       </button>
    )

 };