import "./Contact.css"

import AgilewitsIntro from "../AgilewitsIntro/AgilewitsIntro"

import CommanHeadre from '../CommonHeader/CommonHeadre'

import BotttomPage from '../BottomPage/BottomPage'

import ContactForm from './Map.png'

import { useState } from "react"

const Contact=()=>{
const [FirstName,SetFirstName]=useState("")
const [LastName,SetLastName]=useState("")
const [Contact,SetContact]=useState("")
const [Mail,SetMail]=useState("")
const [Message,SetMessage]=useState("")

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

    return(
        <div className="ContactTopLayer">
            <AgilewitsIntro/>
       <div className="ContactSecondLayer">
<CommanHeadre PageName="ContactUs"/>
<div className="ContactForm">
<img src={ContactForm} alt="ContactForm" className="MapLogo"/>
<form className="Form">
    <div >
    <input type="text" value={FirstName} placeholder="First Name" pattern="[A-Za-z]+"  className="FirstName" onChange={UpdateFirstName}/>
    
    
    <input type="text" placeholder="Ladt Name" className="FirstName" onChange={UpdateLastName}/>
    </div>
    
    <input type="text" placeholder="Contact Details" className="Email" onChange={UpdateContact}/>
    
    <input type="text" placeholder="E-mail" className="Email"  onChange={UpdateMail}/>

    <input type="text" placeholder="Message" className="Message" onChange={UpdateMessage}/>
    
    <button style={{ opacity:  (FirstName === "" || LastName === "" || Contact===""|| Mail==="" || Message==="")  ? 0.2 : 1 }}>SendRequest for Contact</button>
    
</form>
</div>
<BotttomPage/>
       </div>
        </div>
    )
}


export default Contact