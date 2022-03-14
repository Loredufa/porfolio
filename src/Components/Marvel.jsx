import React from "react"
import './Marvel.css';
import { FormattedMessage } from 'react-intl';

export default function Marvel () {
    
    return (
        <div className="MV">
        <h1>Marvel App</h1>
        <h2><FormattedMessage id="Mrvl.h2" defaultMessage="Movile app"/> </h2>
        <div>
        <video src={require("../assets/Projects/Mrvel/MV.mp4")} controls autoPlay loop > </video>
        <div>
        <ul>
            <br/>
            <li>Javascript</li>
           <li>React Native</li>
        </ul>  
        <p><FormattedMessage id="Mrvl.p" defaultMessage="Movile app"/>
        </p>     
        
        </div>
        </div>
        </div>   

    )
}