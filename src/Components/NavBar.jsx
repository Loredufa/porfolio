import React, {useContext} from "react";
import { Link } from 'react-router-dom';
import './NavBar.css';
import {FormattedMessage} from 'react-intl';
import { langContext } from "../context/langContext";

export default function NavBar () {
const idioma = useContext(langContext);
return (
    <div >
    <div className="leng">
    <button onClick={() => idioma.setLenguaje('es-SP')}><img src={require("../assets/espana.png")} alt="img not found" width="40px" height="40px"/> </button>
    <button onClick={() => idioma.setLenguaje('en-US')}><img src={require("../assets/reino-unido.png")} alt="img not found" width="40px" height="40px"/> </button>
   </div>
    <div className="nav">  
    <Link to="/Contact"> <button> 
        <FormattedMessage id="menu.contact" defaultMessage="Contact"/> 
        </button> </Link> 
    <Link to="/Projects"> <button> 
    <FormattedMessage id="menu.project" defaultMessage="Project"/> 
         </button> </Link>  
    <Link to="/About"> <button>
    <FormattedMessage id="menu.about" defaultMessage="About me"/> 
        </button> </Link> 
    <Link to="/"> <button> 
    <FormattedMessage id="menu.home" defaultMessage="Home"/> 
         </button> </Link>  
    </div> 
    </div>
)

}

