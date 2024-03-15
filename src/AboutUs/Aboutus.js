import CommanHeadre from '../CommonHeader/CommonHeadre'

import AgilewitsIntro from '../AgilewitsIntro/AgilewitsIntro'

import BotttomPage from '../BottomPage/BottomPage'

import PartneresOpinion from '../PartenrsOpinion/PartnersOpinion'

import "./AboutUs.css"


import Chat from '../Home/chat.png'

import {Link} from 'react-router-dom'

import PicAboutUs from './AboutImage.png'

import DropDown from "../DropDown/DropDown"

import Missile from './Missile.png'

import Option from '../Home/Options.png'

import { useContext } from 'react'
import Context from '../Context/Context'

const AboutUs=()=>{

   const { IsActive, SetDropDownStatus, } = useContext(Context)
   const DropDownStatus = () => {
       SetDropDownStatus()
   }
return(
    <div className="ToplAYER">
        <AgilewitsIntro/>
      
     <div className="Second">

     <img className="ChatLogo" src={Option} alt="ChatLogo" onClick={DropDownStatus} />
     <div className="AboutpageSecondLayer">
   
   <CommanHeadre PageName="About Us"/>
   <div className='AgilewitsInfo'>

<img src={PicAboutUs} alt="AboutImage" />

<div className="AgilewitsBio" >
<h1 className='Headfont'>Welcome to 
Agilewit Solutions Inc</h1>
<p className='Headfont'>Agilewit Solutions is incorporated as a Technology Consulting services and Software product development firm. Head quartered in Texas and Offshore development centers in India, we have involved in creating strategy, implementing, deploying, and supporting a wide range of solutions for clients worldwide. Our clients include a varied set of Fortune 500, free essay example mid-sized and startup companies. They count on us to provide them with timely, high-quality work and they return to us because we’re reliable, experienced and easy to work with.</p>
</div>
   </div>
   <div className='Mission Row'>
       <div>
     <h1>Our Mission</h1>
     {IsActive && <DropDown />}
    <p className='MissionDescription'>Agilewit team consists of highly skilled professionals based in USA and India. Our team delivery model leverages global talent, agile processes and multiple time zones to help our clients save time and money without compromising the quality. Our guiding principles are based on developing long term relationship with our customers, partners and employees. As a result, we have grown quickly, earning ourselves recognition as a fastest growing Incorporate in USA. Even more prominently, we have done this while building a culture that puts people first.</p>
    
    <div className='MissionTopicsWraper'>  
              <div className='MissionTopics'>
       <h3 className='Missionheading'>Improve Your Business</h3>
       <p className='MissionDescription'>Help our customers grow and improve their business.</p>
    </div>
    <div className='MissionTopics'>
       <h3>Improve Your Business</h3>
       <p className='MissionDescription'>Help our customers grow and improve their business.</p>
    </div>
    <div className='MissionTopics'>
       <h3>Improve Your Business</h3>
       <p className='MissionDescription'>Help our customers grow and improve their business.</p>
    </div>
    <div className='MissionTopics'>
       <h3>Improve Your Business</h3>
       <p className='MissionDescription'>Help our customers grow and improve their business.</p>
    </div>
    </div>

     </div>
     <img className='MissiileLogo' src={Missile} alt="Logo"/>
   </div>
   <PartneresOpinion/>
   <BotttomPage/>
 
   </div>
   <Link to="/Contact" className="ChatLogo">                
                <img  src={Chat} alt="ChatLogo" />
                </Link>
     </div>

       
        </div>
   
)
}

export default AboutUs