import React from 'react'
import socket from './../../sockeConfig'
import { Redirect } from 'react-router-dom';
import StartBtn from './StartBtn';
import CountDown from './CountDown';
import DisplayWords from './DisplayWords';
import Form from './Form';
import ProgressBar from './ProgressBar';
import ScoreBoard from './ScoreBoard';

function TypeRacer({gameState}) {

    const findPlayer=players=>{
        return players.find(player=>player.socketID===socket.id)
    }
    const{_id, players, words, isOpen, isOver}=gameState;
    const player =findPlayer(players)

    if(_id===""){ 
        return <Redirect to="/"/>
    }

    const getScoreBoard =(players)=>{
        const scoreBoard= players.filter(player=>player.WPM !==-1);
        return scoreBoard.sort((a,b)=>a.WPM > b.WPM ? -1 : b.WPM > a.WPM ? 1 : 0)
    }

    const scoreBoard= getScoreBoard(players)

    if(scoreBoard.length===0){
        return (
            <div>
              <CountDown pattern={1}/>
                { !isOpen &&
                <>
                <div className="MainFlexSTartBtn">
                    <div className="FlexStartItem1">
                        <CountDown pattern={2}/>
                        <div className="out MainTyperBlock">
                            <div className="ededede">
                                <DisplayWords words={words} player={player}/>
                                <div className="typeAbove">Type the above words</div>
                                <Form isOpen={isOpen} isOver={isOver} gameID={_id} />
                            </div>
                        </div>
                    </div>
                    <div className="FlexStartItem2">
                        <div className="in HRLineStart"></div>
                    </div>
                    <div className="FlexStartItem3">
                        <ProgressBar players={players} player={player} wordsLength={words.length}/>
                    </div>
                </div>
                </>}
                <StartBtn player={player} gameID={_id} players={players}/>
            </div>
        )
    }else{
        return(
            <ScoreBoard scoreBoard={scoreBoard}/>
        )
    }

    
}

export default TypeRacer
