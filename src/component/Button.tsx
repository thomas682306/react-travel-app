import './Button.css';
import React,{useState} from 'react';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary','btn--outline'];
const SIZES  = ['btn--medium','btn--large'];
type buttonType = {
    children : any,
    type: any,
    onClick: any,
    buttonStyle: any,
    buttonSize:any
} 
export function Button ({children, type, onClick, buttonStyle, buttonSize}:any):any{
     const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
     const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

     return (
        <Link to='/sign-up'>
            <button className={'btn {${checkButtonStyle} ${checkButtonSize}'} 
            onClick={onClick}
            type={type}>
                {children}
            </button>
        </Link>
        );

        
}
