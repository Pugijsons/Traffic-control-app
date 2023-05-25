import React from 'react';
import "../styles/components/button.scss";

type ButtonProps = {
    onButtonClick?: () => void;
    variant? : "primary" | "secondary"
    children : JSX.Element | string;
    type? : "button" | "submit";
};

export const Button = ({onButtonClick, variant = "primary", children, type = "button"}: ButtonProps) => {
    return <button className={`button ${variant}`} onClick = {() => onButtonClick?.()}>{children}</button>
}