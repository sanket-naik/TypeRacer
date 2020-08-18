import React, { useState, useEffect } from 'react'
import socket from './../../sockeConfig'
import Square from '../../neumorphism/Square/Square'
import './CountDown.css'

function CountDown(props) {

    const [timer, setTimer] = useState({countdown:"", msg:""})

    useEffect(() => {
       socket.on('timer',(data)=>{
           setTimer(data);
           console.log(data)
       })
       socket.on('done',()=>{
           socket.removeListener('timer')
       })
    }, [])

    const {countDown, msg, started}=timer;
    console.log(countDown, msg, started)

    return (
        started===false && props.pattern==1?
        <div className="SquarePosTimer">
            <Square>
                <>
                    <div className="StartrsIn">{msg}</div>
                    <div className="timerstartstart">{countDown}</div>
                </>
            </Square>
        </div>
        :started===true && props.pattern==2 &&
        <div>
            <Square className={started===true && "GameStartedType"}> 
                <div className="Squarestarttimer">
                    <div className="StartrsIn SquareTimer1">{msg}</div>
                    <div className="timerstartstart SquareTimer2">{countDown}</div>
                </div>
            </Square>
        </div>
    )
}

export default CountDown
