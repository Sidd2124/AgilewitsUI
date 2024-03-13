import "./Contact.css"

import AgilewitsIntro from "../AgilewitsIntro/AgilewitsIntro"

import CommanHeadre from '../CommonHeader/CommonHeadre'

import BotttomPage from '../BottomPage/BottomPage'

import ContactForm from './Map.png'

import { useState,useRef } from "react"

import emailjs from '@emailjs/browser';

const Contact=()=>{
const [FirstName,SetFirstName]=useState("")
const [LastName,SetLastName]=useState("")
const [Contact,SetContact]=useState("")
const [Mail,SetMail]=useState("")
const [Message,SetMessage]=useState("")
const [SuccessMessage,SetSuccessMessage]=useState("")
const form = useRef();

const UpdateFirstName=(e)=>{
    SetFirstName(e.target.value)
}

const UpdateLastName=(e)=>{
    SetLastName(e.target.value)
}


const UpdateContact=(e)=>{
SetContact(e.target.value)
}

const UpdateMail=(e)=>{
    SetMail(e.target.Mail)
}

const UpdateMessage=(e)=>{
    SetMessage(e.target.value)
}


const Sent=(e)=>{
    e.preventDefault()


    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          SetFirstName("")
    SetLastName("")
    SetContact("")
    SetMail("")
    SetMessage("")
    SetSuccessMessage("*Details Saved. We'll be in touch shortly")
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    
    
}

    return(
        <div className="ContactTopLayer">
            <AgilewitsIntro/>
       <div className="ContactSecondLayer">
<CommanHeadre PageName="ContactUs"/>
<div className="ContactForm">
<img src={ContactForm} alt="ContactForm" className="MapLogo"/>
<form className="Form" ref={form} onSubmit={Sent}>
    <div >
    <input type="text" value={FirstName} placeholder="First Name" pattern="[A-Za-z]+"  className="FirstName" onChange={UpdateFirstName}/>
    
    
    <input type="text" value={LastName} placeholder="Ladt Name" pattern="[A-Za-z]+" className="FirstName" onChange={UpdateLastName}/>
    </div>
    
    <input type="text" value={Contact} placeholder="Contact Details" className="Email" onChange={UpdateContact} pattern="[0-9]*" />

    <input type="text" value={Mail} placeholder="E-mail" pattern=".*@.*" className="Email" onChange={UpdateMail} />


    <input type="text" placeholder="Message" value={Message} className="Message" onChange={UpdateMessage}/>
    
    <button style={{ opacity:  (FirstName === "" || LastName === "" || Contact===""|| Mail==="" || Message==="")  ? 0.2 : 1 }}  type="submit">SendRequest for Contact</button>
    <p className="SuccessMessage">{SuccessMessage}</p>
</form>
</div>
<BotttomPage/>
       </div>
        </div>
    )
}


export default Contact