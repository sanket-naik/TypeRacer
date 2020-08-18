import React from 'react'
import './LoderBar.css'

export default function LoaderBar(props) {
    return ( 
        <div className="loaderContnr">
            <div className="out FirdtLoao">
                <div className="loadepEr">
                    <div style={{marginTop:'4px'}}></div>
                </div>
                <div className="NameLaoder">
                    {props.name}
                </div>
            </div>
            <div className="in Loadeingindcte">
                <div className="Howcmchnalk" style={{width:props.percentage}}/>
                {/* <span className="oidhi">50%</span> */}
            </div>
        </div>
    )
}
