
import "./BottomPage.css"

import Logo from './Agilewits white-01.png'

import {Link} from 'react-router-dom'
import Facebook from '../AgilewitsIntro/Facebook.png'

import Twitter from '../AgilewitsIntro/Twitter.png'

import Linkdin from '../AgilewitsIntro/Linkedin.png'

const BotttomPage=()=>{
return(
    <div className="TopLayerBottomPage">
       
   <div className="Rows">
   <img src={Logo} alt="lOGO" className="BottomPageLogo"/>

<div className="BottomPageSocialMediaIcons">
<img src={Facebook} alt="Facebook" className="BottomPageSocialMediaLogo"/>
<img src={Twitter} alt="Twitter" className="BottomPageSocialMediaLogo"/>
<img src={Linkdin} alt="Linkdin" className="BottomPageSocialMediaLogo"/>

</div>
   </div>
  <div className="BottomPageSecondLayer">
  <div className="ServicesBottomContainer">
    <h3>EXPLORE</h3>
    <Link className="LinkRemove" to="/About">
    <p>About Us</p>
    </Link>
    <p>Careers</p>
    <p>Current Openings</p>

   </div>
   <div className="ServicesBottomContainer">
    <h3>SERVICES</h3>
    <p>Counsulting</p>
    <p>App Developement</p>
    <p>Trainig</p>

   </div>
   <div className="ServicesBottomContainer">
    <h3>PRODUT</h3>
    <p>CONSEN</p>
    

   </div>
   <div className="ServicesBottomContainer">
    <h3>CONTACT</h3>
    <p>AGILEWIT SOLUTIONS INC
405 State Hwy 121 Bypass Suite A250,
Lewisville TX 75067
Phone Number: (516) 888-0089</p>
    <p>AGILEWIT SOLUTIONS PVT LTDH NO.3-1-101/6,Navodaya Colony,
Road No 2,Sbh Venture-I, LB NagarHyderabad,Telangana,India,50074
Phone Number: 040-48547228</p>
    <p className="email">info@agilewits.com</p>

   </div>
  </div>
  <hr/>
  <p>© Agilewit Solutions Inc</p>
    </div>
)
}

export default  BotttomPage