import React from "react";
import { Link } from 'react-router-dom';
import './Nav.css';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';


export default function Nav () {

return (
    <div className="nv">    
    <h1><FormattedMessage id="Nv.1" defaultMessage="Contact me..."/></h1>    
   
    <a href="https://www.linkedin.com/in/lorena-dufaur/"> <img src={require("../assets/lk.png")} alt="img not found" width="30px" height="30px"/> </a>  
    <a href="https://github.com/Loredufa"> <img src={require("../assets/gh.png")} alt="img not found" width="30px" height="30px"/> </a>
    <Link to="/Contact"><Img src={require("../assets/m.png")} alt="img not found" width="35px" height="35px"/> </Link> 
    <Mail>lorenadufaur@gmail.com</Mail>
    </div> 
)

}

const Img = styled.img`
margin-top: 0px;
margin-left:10px;
`;
const Mail = styled.h2`
margin-top: 18px;
font-size: 15px;
margin-left:8px;
`;