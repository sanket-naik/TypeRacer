import React, { useState, useEffect } from 'react'
import socket from'./../../sockeConfig'
import Button from '../../neumorphism/Button/Button';
import './StartBtn.css'
import HowItWorks from '../Common/HowItWorks/HowItWorks';
import InviteCode from '../Common/InviteCode/InviteCode';
import PlayerInLobby from '../Common/PlayerInLobby/PlayerInLobby';
import Square from '../../neumorphism/Square/Square';

function StartBtn({player, gameID, players}) {

    useEffect(() => {
        let arr=window.location.pathname.split('/')
        let Id=arr[arr.length-1]
        setInviteId(Id)
    }, [])

    const[showBtn, setShowBtn]=useState(true)
    const{isPartyLeader}=player;
    const[InviteId, setInviteId]=useState('')

    const handleClick=(e)=>{
        socket.emit('timer', {playerID : player._id, gameID});
    }
    useEffect(() => {
        if(showBtn){
            socket.on('timer',(data)=>{
                setShowBtn(false)
            })
        }
     }, [])

    return (
    (showBtn) &&
        <div className="MainFlexSTartBtn">
            <div className="FlexStartItem1start">
                <HowItWorks className="HowPadding"/>
            </div>
            <div className="FlexStartItem2start">
                <div className="in HRLine"></div>
            </div>
            <div className="FlexStartItem3start">
                <div className="SecondSytartFlec">
                    <InviteCode code={InviteId}/>
                    <div style={{marginTop:'30px'}}>
                        <div style={{display:'flex'}}>
                            <div>
                                <PlayerInLobby  style={{marginRight:'20px'}} color="green" Heading="Lobby" players={players.filter(e=>!e.isPartyLeader)} />
                            </div>
                            <div>
                                <PlayerInLobby color="red" Heading="Admin" players={players.filter(e=>e.isPartyLeader)} />
                            </div>
                        </div>
                    </div>
                    {isPartyLeader ?
                    <div className="startbn">
                        <Button 
                            onClick={handleClick}>Start Game</Button>
                    </div>
                    :
                    <div className="startbn">
                        <Square shadow="out" style={{marginBottom:'20px'}}>Hello {player.nickName} please wait while admin starts the game...</Square>
                    </div>
                    }
                </div>
            </div>
        </div>                       
    )
}

export default StartBtn
