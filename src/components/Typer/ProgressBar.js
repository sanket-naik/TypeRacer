import React from 'react'
import LoaderBar from './LoaderBar/LoaderBar';

const calculatePercentage=(player, wordsLength)=>{
    if(player.currentWordIndex !==0){
        return ((player.currentWordIndex/wordsLength)*100).toFixed(2) +"%"
    }else{
        return 0
    }
}

export default function ProgressBar({players, player, wordsLength}) {
    const percentage= calculatePercentage(player, wordsLength);
    return (
        <>
        <LoaderBar
            percentage={percentage}
            name={player.nickName}
        />
        {
            players.map(playerobj=>{
                const percentage= calculatePercentage(playerobj, wordsLength);
                return playerobj._id!==player._id &&
                <LoaderBar
                        percentage={percentage}
                        name={playerobj.nickName}
                    />

            })
        }
        </>
    )
}
