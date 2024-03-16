
import "./BottomPage.css"

import Logo from './Agilewits white-01.png'

import {Link} from 'react-router-dom'
import Facebook from '../AgilewitsIntro/Facebook.png'

import Twitter from '../AgilewitsIntro/Twitter.png'

import Linkdin from '../AgilewitsIntro/Linkedin.png'




const BotttomPage=()=>{
 
    
return(
    <div className="TopLayerBottomPage">
        <Link className="ChatLogo"  to="/Contact">
          
           </Link>
   <div className="Rows">
    <Link to="/">
     
   <img src={Logo} alt="lOGO" className="BottomPageLogo"/>

   </Link>

<div className="BottomPageSocialMediaIcons">
<img src={Facebook} href="https://twitter.com/agilewitsol?t=5xTTxBPnQLuPutocsqADYw&s=08" target="_blank" alt="Facebook" className="BottomPageSocialMediaLogo"/>
<img src={Twitter} alt="Twitter" className="BottomPageSocialMediaLogo"/>
<img src={Linkdin} alt="Linkdin" className="BottomPageSocialMediaLogo"/>

</div>
   </div>
  <div className="BottomPageSecondLayer">
  <div className="ServicesBottomContainer">
    <h3>EXPLORE</h3>
    <Link className="LinkRemove" to="/About"  >
    <p >About Us</p>
    </Link>
    <Link to="/Jobs" className="LinkRemove">
    <p>Careers</p>
    </Link>
    <p>Current Openings</p>

   </div>
   <div className="ServicesBottomContainer">
    <h3>SERVICES</h3>
    <Link to="/Counsulting" className="LinkRemove">
    <p>Counsulting</p>
    </Link>
    <Link className="LinkRemove" to="/AppDevelopment">
    <p>App Developement</p>
    </Link>
    <Link to="/Training" className="LinkRemove">
                <p>Training</p>
                </Link>

   </div>
   <div className="ServicesBottomContainer">
    <h3>PRODUT</h3>
    <Link to="/Concen" className="LinkRemove">
    <p>CONSEN</p>
    </Link>
    

   </div>
   <div className="ServicesBottomContainer">
   <Link className="LinkRemove" to="/Contact">
    <h3>CONTACT</h3>
    </Link>
    <p className="CompanyAdress">AGILEWIT SOLUTIONS INC    
   State Hwy 121 Bypass Suite A250,
Lewisville TX 75067
Phone Number: (516) 888-0089</p>
    <p className="CompanyAdress">AGILEWIT SOLUTIONS PVT LTD H.No.1-90/7/53/P, Second Floor, Blossom Heights, Plot No. 53, Patrika Nagar, Madhapur, Hyderabad Telangana</p>
    <p className="email">info@agilewits.com</p>

   </div>
  </div>
  <hr/>
  <p>© Agilewit Solutions Inc</p>
    </div>
)
}

export default  BotttomPage