import React from 'react'
import './ScoreBoard.css'


export default function ScoreBoard({scoreBoard}) {
        return (
            <div className="FlexWinnerrs">
                <div style={{textAlign:"center"}}>
                    <img className="SueWinner" src="https://res.cloudinary.com/dlmozkbdc/image/upload/v1598153333/Socket/source_q8ozu3.gif"/>
                </div>
                <div style={{width:"fit-content"}}>
                    <div className="Headings HeadMain" style={{marginBottom:'70px', marginTop:'50px'}}>
                        <img height="160px" style={{borderRadius:"15px"}} src="https://res.cloudinary.com/dlmozkbdc/image/upload/v1598110619/Socket/undraw_awards_fieb_ltxxwo.svg"/>
                    </div>
                    <div>
                    <div className="ScoreTable out" style={{marginTop:'50px'}}>
                        <table className="TableScolr">
                            <tr>
                                <th>Rank</th>
                                <th>Name</th>
                                <th>WPM</th>
                            </tr>
                             {scoreBoard.map((player, index)=>(
                                <tr>
                                    <td>{index+1}</td>
                                    <td>{player.nickName}</td>
                                    <td>{player.WPM}</td>
                                </tr>
                            ))}
                        </table>
                    </div>
                  </div>
                </div>
                <div style={{textAlign:"center"}}>
                    <img className="SueWinner" src="https://res.cloudinary.com/dlmozkbdc/image/upload/v1598153333/Socket/source_q8ozu3.gif"/>
                </div>
            </div>
        )
}
