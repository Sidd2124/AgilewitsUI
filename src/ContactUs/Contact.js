import "./Contact.css"

import AgilewitsIntro from "../AgilewitsIntro/AgilewitsIntro"

import CommanHeadre from '../CommonHeader/CommonHeadre'

import BotttomPage from '../BottomPage/BottomPage'

import ContactForm from './Map.png'

import { useState,useRef } from "react"


import emailjs from 'emailjs-com';


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
    SetMail(e.target.value)
}

const UpdateMessage=(e)=>{
    SetMessage(e.target.value)
}





const Sent = async (e) => {
    e.preventDefault();

    try {
      // Use async/await for better readability and error handling
      const result = await emailjs.sendForm(
        'service_mjxgtom', 'template_3fhp1ha',
        form.current,
       "PvdSsTgVVL-_miLVe"
      );

      console.log(result.text);

      // Reset the form only after the email has been sent successfully
      console.log('SUCCESS!');
      SetFirstName("");
      SetLastName("");
      SetContact("");
      SetMail("");
      SetMessage("");
      SetSuccessMessage("*Details Saved. We'll be in touch shortly");

      // Alert and redirect after successful email send
     
      
    } catch (error) {
      console.error(error.text);
      // Handle the error (e.g., show an error message to the user)
    }
  };


    return(
        <div className="ContactTopLayer">
            <AgilewitsIntro/>
       <div className="ContactSecondLayer">
<CommanHeadre PageName="ContactUs"/>
<div className="ContactForm">
<img src={ContactForm} alt="ContactForm" className="MapLogo"/>
<form className="Form" ref={form} onSubmit={Sent}>
    <div >
    <input type="text" value={FirstName} placeholder="First Name" pattern="[A-Za-z]+" name="name"  className="FirstName" onChange={UpdateFirstName}/>
    
    
    <input type="text" value={LastName} placeholder="Last Name" pattern="[A-Za-z]+" name="name" className="FirstName" onChange={UpdateLastName}/>
    </div>
    
    <input type="text" value={Contact} placeholder="Contact Details" className="Email" name="number" onChange={UpdateContact} pattern="[0-9]*" />

    <input type="text" value={Mail} placeholder="E-mail" pattern=".*@.*" className="Email" name="from_name" onChange={UpdateMail} />


    <input type="text" placeholder="Message" value={Message} className="Message" name="message" onChange={UpdateMessage}/>
    
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