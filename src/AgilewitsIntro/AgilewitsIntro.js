import CompanyLogo from './CompanyLogo.jpg'

import Facebook from './Facebook.png'
import Linkdin from './Linkedin.png'
import  Twitter from './Twitter.png'

import { Link } from 'react-router-dom/cjs/react-router-dom.min'

import './AgilewitsIntro.css'

const AgilewitsIntro=()=>{
    return(
        <div className="FirstLayer">
            <Link to="/">
            <img src={CompanyLogo} alt="AgilewitsSolutions" className='IntroLogo'/>
            </Link>
            <hr className="Hr"/>

            <p className='CompanyCaption'>"Technology empowers us to dream beyond boundaries and make those dreams a reality."</p>
            <p>(516) 888-0089
info@agilewits.com</p>

<div className="SocialMediaIcons">
    <img src={Facebook} alt="Facebook"/>
    <img src={Twitter} alt="Twitter"/>
    <img src={Linkdin} alt="Linkdin"/>

</div>
        </div>
    )
}

export default AgilewitsIntro