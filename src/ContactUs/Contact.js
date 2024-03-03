import "./Contact.css"

import AgilewitsIntro from "../AgilewitsIntro/AgilewitsIntro"

import CommanHeadre from '../CommonHeader/CommonHeadre'

import BotttomPage from '../BottomPage/BottomPage'

import ContactForm from './Map.png'

const Contact=()=>{

    return(
        <div className="ContactTopLayer">
            <AgilewitsIntro/>
       <div className="ContactSecondLayer">
<CommanHeadre PageName="ContactUs"/>
<div className="ContactForm">
<img src={ContactForm} alt="ContactForm" className="MapLogo"/>
<form className="Form">
    <div >
    <input type="text" placeholder="First Name" className="FirstName"/>
    
    <input type="text" placeholder="First Name" className="FirstName"/>
    </div>
    
    <input type="text" placeholder="First Name" className="Email"/>
    
    <input type="text" placeholder="First Name" className="Email"/>

    <input type="text" placeholder="Message" className="Message"/>
    
    <button>SendRequest for Contact</button>
    
</form>
</div>
<BotttomPage/>
       </div>
        </div>
    )
}


export default Contact