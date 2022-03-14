import React from "react"
import './TurnOn.css';
import { FormattedMessage } from 'react-intl';

export default function Dog () {
    
    return (
        <div className="vt">
        <h1>My Best Friend</h1>
        <h2>SPA - Single page application</h2>
        <div>
        <video src={require("../assets/Projects/PI/P1I.mp4")} controls autoPlay loop > </video>
        <ul>
            <br/>
            <li>Javascript</li>
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
       
        <p><FormattedMessage id="Dog.p1" defaultMessage="Complete app "/>
        </p>
        <p><FormattedMessage id="Dog.p2" defaultMessage="Complete app "/> </p>
        <h2>...</h2>
        </div>
    )
}