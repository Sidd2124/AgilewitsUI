import AgilewitsIntro from "../AgilewitsIntro/AgilewitsIntro"
import './Home.css'
import Chat from './chat.png'
import Option from './Options.png'

import DropDown from '../DropDown/DropDown'

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
            <hr/>
            <div className="Title">
         <p>W E A R E A G I L E W I T</p>
<h1 className="Caption">Innovate With Our Tech Experts</h1>
<p> Elevate Your Business with Our Technology Consulting and Software Development Expertise</p>
<p>LETS WORK TOGETHER +</p>
{IsActive&&<DropDown/>}

            </div>
   
            </div>
            <img className="ChatLogo" src={Chat} alt="ChatLogo"/>
            </div>
         </div>
     
    )
}

export default Home