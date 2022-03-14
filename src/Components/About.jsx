import React from "react";
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';


export default function About () {

    return (
        <div className="About">      
        <Title1><FormattedMessage id="About.title3" defaultMessage="Welcome"/></Title1>
        <P2> 
        <FormattedMessage id="About.prr" defaultMessage="welcome"/>
        </P2>
        <div>
            <Title2><FormattedMessage id="About.title1" defaultMessage="Skills"/></Title2>
            <Imgs src={require("../assets/CSS.png")} alt="img not found" width="50px" height="50px"/>
            <Imgs src={require("../assets/Express.png")} alt="img not found" width="100px" height="50px"/>
            <Imgs src={require("../assets/html.png")} alt="img not found" width="50px" height="50px"/>
            <Imgs src={require("../assets/javascript.png")} alt="img not found" width="50px" height="50px"/>
            <Imgs src={require("../assets/native.png")} alt="img not found" width="50px" height="50px"/>
            <Imgs src={require("../assets/node.png")} alt="img not found" width="100px" height="50px"/>
            <Imgs src={require("../assets/rect.png")} alt="img not found" width="50px" height="50px"/>
            <Imgs src={require("../assets/seuelize.png")} alt="img not found" width="50px" height="50px"/>
            <Imgs src={require("../assets/redux.png")} alt="img not found" width="50px" height="50px"/>
            <Imgs src={require("../assets/postgres.png")} alt="img not found" width="100px" height="50px"/>
            <Imgs src={require("../assets/postmn.png")} alt="img not found" width="50px" height="50px"/>
        </div>
        <div>
            <Title2><FormattedMessage id="About.title2" defaultMessage="Skills"/></Title2>
            <Sk2>
            <Skill><FormattedMessage id="About.skill1" defaultMessage="Skills"/></Skill>
            <Skill><FormattedMessage id="About.skill2" defaultMessage="Skills"/> </Skill>
            <Skill><FormattedMessage id="About.skill3" defaultMessage="Skills"/> </Skill>
            <Skill><FormattedMessage id="About.skill4" defaultMessage="Skills"/></Skill>
            <Skill><FormattedMessage id="About.skill5" defaultMessage="Skills"/></Skill>
            <Skill><FormattedMessage id="About.skill6" defaultMessage="Skills"/> </Skill>
            <Skill><FormattedMessage id="About.skill7" defaultMessage="Skills"/></Skill>
            </Sk2>
        </div>
     
        </div>
    )
    
    }
    const Title1 = styled.h1`
    margin-top:0;
    margin-left:50px;
    font-size:30px;
    `;
  const P2 = styled.p`
  left: 0;
  right: 0;
  padding:10px;
  background-color: #9d96c2;
  border-radius: 10px;
  margin-left: 40px;
  margin-right: 40px;
  font-size: 18px;
  font-family: 'Open Sans', sans-serif;
  box-shadow: 5px 5px 10px black;
  color: rgb(10, 10, 10)
    `;
const Title2 = styled.h2`
margin: 10px;
margin-top:20px;
padding:5px;
font-size: 20px;
background-color:#f09330;
box-shadow: 5px 5px 10px grey;
border-radius:10px;
    `;
const Imgs = styled.img`
margin: 20px;
font-size:50px;
`;
const Skill = styled.h3`
font-size:15px;
margin: 10px;
background-color: #9d96c2;
border-radius:20px;
align-items: center;
padding:10px;
box-shadow: 5px 5px 10px black;
color: #272727
`;
const Sk2 = styled.div`
display: flex;
flex-direction: row;
margin-top:30px;
margin-left:40px;
@media screen and (max-width: 320px) {
    display: inline;
}
@media screen and (max-width:768px){
    display: inline;
}
`;

