import AgilewitsIntro from "../AgilewitsIntro/AgilewitsIntro"
import './Home.css'
import Chat from './chat.png'
import Option from './Options.png'

import DropDown from '../DropDown/DropDown'

import FirstClient from './Client1.png'

import SecondClient from './Client2.png'

import ThirdClient from './Client3.png'

import FourthClient from './Client4.png'

import { useContext } from "react"

import Context from '../Context/Context'

const Home=()=>{
    const{IsActive,SetDropDownStatus}=useContext(Context)
    const DropDownStatus=()=>{
        SetDropDownStatus()
    }
    return(
        <div className="ToplAYER">
           
            <AgilewitsIntro/>

      <div className="Second">
      <img className="ChatLogo" src={Option} alt="ChatLogo" onClick={DropDownStatus}  />

         <div className="SecondLayer">
         <div className="Title">
         <p>W E A R E A G I L E W I T</p>
<h1 className="Caption">Innovate With Our Tech Experts</h1>
<p> Elevate Your Business with Our Technology Consulting and Software Development Expertise</p>
<p>LETS WORK TOGETHER +</p>
{IsActive&&<DropDown/>}

            </div>
      <div className="Description">
<div className="Row">
<h3 className="ClientServiceTag">You Share your idea
We get it done</h3>
<p className="ClientServiceDescription">Agilewit Solutions is incorporated as a Technology Consulting services and Software product development firm. Head quartered in Texas and Offshore development centers in India, we have involved in creating strategy, implementing, deploying, and supporting a wide range of 
solutions for clients worldwide</p>
</div>
<div className="Row">
<img src={FirstClient} alt="ClientCompanyLogo"/>
<img src={FirstClient} alt="ClientCompanyLogo"/>
<img src={FirstClient} alt="ClientCompanyLogo"/>
<img src={FirstClient} alt="ClientCompanyLogo"/>
</div>

<h1 className="ClientServiceTag">See what  we can do for you</h1>
      </div>
   
            </div>
            <img className="ChatLogo" src={Chat} alt="ChatLogo"/>
            </div>
         </div>
     
    )
}

export default Home