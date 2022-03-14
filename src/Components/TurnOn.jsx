import React from "react"
import './TurnOn.css';
import { FormattedMessage } from 'react-intl';

export default function TurnOn () {
    
    return (
        <div className="vt">
        <h1>TurnOn</h1>
        <h2><FormattedMessage id="Tur.h2" defaultMessage="Web + Movil + Admin"/></h2>
        <div>
        <video src={require("../assets/Projects/turnOn/to.mp4")} controls autoPlay loop > </video>
        <ul>
            <br/>
        <li>Javascript</li>
           <li>React Native</li>
           <li>React</li> 
           <li>Redux</li>   
           <li>CSS</li>
           <li>Styled Components</li>
           <li>Node Js</li>
           <li>Express</li>
           <li>Sequelize</li>
           <li>PostgreSQL</li>
        </ul>
        </div> 
       
        <p>
            <FormattedMessage id="Tur.p1" defaultMessage="Web + Movil + Admin"/>         
        </p>
        <p> 
            <FormattedMessage id="Tur.p2" defaultMessage="Web + Movil + Admin"/>         
        </p>
        
        <h2>...</h2>
        </div>
    )
}