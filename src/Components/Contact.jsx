import { init, sendForm } from 'emailjs-com';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Nav from './Nav';
import './Contact.css';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
init('va8xaTnPeNpkiniQI');

export default function Contact () {

const { handleSubmit } = useForm();

const [contactNumber, setContactNumber] = useState("000000");
const [statusMessage, setStatusMessage] = useState("Message");
const [error, setError] = useState('')

function validateUser(value){
  if(!/\S+@\S+\.\S+/.test(value)) {
    setError('xxxx@xxx.com');
  } else {
    setError('');
  }
  return
}
 const generateContactNumber = () => {
 const numStr = "000000" + (Math.random() * 1000000 | 0);
 setContactNumber(numStr.substring(numStr.length - 6));
  }

  const onSubmit = (data) => {
   const statusMessage = document.querySelector('.status-message');
   console.log(data);
   const form = document.querySelector('#contact-form')
    generateContactNumber();
    sendForm('default_service', 'template_q6g256h', '#contact-form')
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        form.reset();
        setStatusMessage("Message sent!");
        statusMessage.className = "status-message success";
        setTimeout(()=> {
        statusMessage.className = 'status-message'
      }, 5000)
       // const statusMessage = document.querySelector('.status-message');
      }, function(error) {
        console.log('FAILED...', error);
        setStatusMessage("Failed to send message! Please try again later.");
        statusMessage.className = "status-message failure";
        setTimeout(()=> {
          statusMessage.className = 'status-message'
        }, 5000)
      });
  }

    return (
      <div>
       <Logo src={require("../assets/Logoyo.png")} alt="img not found" width="60px" height="40px"/>
        <div className="cont">
        
        <Tcont><FormattedMessage id="Cont.t" defaultMessage="Contact me"/></Tcont>
        
        <p className='status-message'>{statusMessage}</p>
        <form id='contact-form' onSubmit={handleSubmit(onSubmit)}>
        <input type='hidden' name='contact_number' value={contactNumber} />
         <input type='text' name='user_name' placeholder='Name'/>
         <br/>
       
        <input className={error && 'danger'} type='email' name='user_email' placeholder='Email' onChange={(e) => validateUser(e.target.value)} />
        {!error ? null : <div>{error}</div>}
        <br/>
        
        
        <textarea name='message'  placeholder='Message'/>
        <br/>
        <Send type='submit' value='Send' />
        </form>
        </div>
        <Nav/>
        </div>
    )
    
    }

    const Send = styled.input`
    cursor: pointer;
    margin-bottom:20px;
    :hover {
        background-color: #eccb9a;
        }
`;
   const Tcont = styled.h1`
    font-size:30px;
    text-shadow: 5px 5px 10px #2e2e2d;
    margin-bottom:0px;
    @media screen and (max-width: 320px) {
      font-size:20px;
}
@media screen and (max-width:768px){
  font-size:20px;
}
`;
const Logo = styled.img`
    border-radius:50%;
    display: flex;
    margin-left:30px;
  
`;

