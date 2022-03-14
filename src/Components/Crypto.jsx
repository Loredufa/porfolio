import React from "react"
import './TurnOn.css';
import { FormattedMessage } from 'react-intl';

export default function Crypto () {
    
    return (
        <div className="vt">
        <h1><FormattedMessage id="Crypto.tit" defaultMessage="Cotizador de Criptomonedas"/></h1>
        <h2>SPA - Single page application</h2>
        <div>
        <video src={require("../assets/Projects/Crypto/CC.mp4")} controls autoPlay loop > </video>
        <ul>
            <br/>
        <li>Javascript</li>
        <li>Javascript</li>
           <li>React</li>
           <li>CSS</li>
           <li>Styled Components</li>
           <li>Hooks</li>
        </ul>
        </div> 
       
        <p> <FormattedMessage id="Crypto.p" defaultMessage="Quote your currencies instantly in real time"/>
        </p>
        <h2>...</h2>
        </div>
    )
}