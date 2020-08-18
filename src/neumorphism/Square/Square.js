import React from 'react'
import './Square.css'

export default function Square(props) {
    return (
        <div className={`${props.shadow || 'out'} AquareBlock ${props.className}`} style={{...props.style}}>
            {props.children}
        </div>
    )
}
