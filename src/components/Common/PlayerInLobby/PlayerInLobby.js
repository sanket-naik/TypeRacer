import React from 'react'
import './PlayerInLobby.css'

export default function PlayerInLobby(props) {
    return (
        <>
            <div className="out LobbyPlayers" style={{...props.style}}>
            <div style={{padding:"0px 20px"}}>{props.Heading}</div>
            {props.players.length>0 ?
            props.players.map(player=>(
                <div className="lineFex">
                    <div className="lonefr"> <div className="inLine" style={{backgroundColor:props.color}}/> </div>
                    <div>{player.nickName}</div>
                </div>
            ))
            :
                <div className="lineFex">
                    <div>-</div>
                </div>
            }
            </div>
        </>
    )
}
