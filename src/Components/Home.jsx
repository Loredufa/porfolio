
import styled from 'styled-components';
import './Home.css';
import Nav from './Nav';
import { FormattedMessage } from 'react-intl';



export default function Home () {
    return (       
        <div className="Home" >           
        <header className="header"> 
        <div className="video">
        <video src={require("../assets/b1.mp4")} autoPlay loop muted> </video>       
        <div className="over">
        <div className="content"> 
        <Name>Lorena Dufaur</Name>
        <Desc>
            <FormattedMessage id="home.h2" defaultMessage="welcome"/>
        </Desc>     
       </div>
       </div>
       </div>
        </header>
        <div className="prr" >       
        <P>
        <br/>
        <br/>
        <FormattedMessage id="home.prr" defaultMessage="welcome"/>
        </P>
            <a title="Port" href="/About"> <img src={require("../assets/op1.png")} alt="img not found" width="70%" height="100%"/></a>
        </div>  
        <Nav/>
        </div>
       
         
    )
}

const Name = styled.h1`
font-family: 'Hubballi', cursive;
font-size: 600%;
margin-top:1%;
margin-right:25%;
margin-bottom:1%;
align-items: center;
font-weight: bold;
text-shadow: 5px 5px 10px #2e2e2d;
`;
const Desc = styled.span`
font-size: 200%;
align-items: center;
font-weight: bold;
margin-right:25%;
`;
const P = styled.p`
margin-right: 10%;
`;

