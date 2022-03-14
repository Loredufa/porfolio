import React from "react";
import './Projects.css';
import { FormattedMessage } from 'react-intl';

export default function Projects () {
    
    return (
        <div className="prin">
            <h1><FormattedMessage id="Pro.title" defaultMessage="Projects"/></h1>
        <div className="grl">   
        <div>
            <h2>TurnOn</h2>
            <div className="card">
            <a title="TurnOn" href="/TurnOn"><img src={require("../assets/turnOn.png")} alt="img not found" width="350px" height="100%" /></a> 
            <ul>
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
           <p></p>
        </div>
        </div>
        <div>
            <h2>My best friend</h2>
            <div className="card">
            <a title="TurnOn" href="/Dog"><img src={require("../assets/Projects/PI1.png")} alt="img not found" width="500px" height="280px"/></a> 
            <p></p>
            <ul>
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
        </div>
        <div>
            <h2>Marvel app</h2>
            <div className="card">
            <a title="Marvel" href="/Marvel"><img src={require("../assets/MV.jpg")} alt="img not found" width="200px" height="400px"/></a> 
            <p></p>
            <ul>
           <li>Javascript</li>
           <li>React Native</li>
           </ul>
        </div>
        </div>
        <div>
            <h2><FormattedMessage id="Pro.title1" defaultMessage="Crypto"/></h2>
            <div className="card">
            <a title="Crypto" href="/Crypto"><img src={require("../assets/CC.png")} alt="img not found" width="500px" height="280px" /></a>  
            <p></p>
            <ul>
           <li>Javascript</li>
           <li>React</li>
           <li>CSS</li>
           <li>Styled Components</li>
           <li>Hooks</li>
           </ul>
        </div>
        </div>
        </div>
        </div>
    )
    
    }