import "./AppDevelopment.css"

import AgilewitsIntro from '../AgilewitsIntro/AgilewitsIntro'

import {Link} from 'react-router-dom'

import PicAboutUs from '../AboutUs/AboutImage.png'

import CommanHeadre from '../CommonHeader/CommonHeadre'

import BotttomPage from '../BottomPage/BottomPage'

import Gif from './ezgif.com-resize.gif' 

import Phone from "./Phone.png"

import Phones from "./Phones.png"

import Androide from './Android.png'

const AppDevelopment=()=>{
    return(
        <div className="TopAppDevelopment">
           <AgilewitsIntro/>
           <div className="AboutpageSecondLayer">
<CommanHeadre PageName="App Development"/>
           <div className='AgilewitsInfo'>

<img src={PicAboutUs} alt="AboutImage" />

<div className="AgilewitsBio" >
    <h1 className='Headfont'>Welcome to 
Agilewit Solutions Inc</h1>
<p className='Headfont'>Agilewit Solutions is incorporated as a Technology Consulting services and Software product development firm. Head quartered in Texas and Offshore development centers in India, we have involved in creating strategy, implementing, deploying, and supporting a wide range of solutions for clients worldwide. Our clients include a varied set of Fortune 500, free essay example mid-sized and startup companies. They count on us to provide them with timely, high-quality work and they return to us because we’re reliable, experienced and easy to work with.</p>
</div>
        </div>
        <div className="DevelopFeatures">
            <div className="Gifbg">
        <img src={Gif} alt="Apple App Store 10th Anniversary" className="GifLogo"/>
        <div>
            <h2>Manage projects easily</h2>
            <p>The Mobile devices have become the most necessity device in society and are developing enormously. For advancement of computing power, mobile apps have come into existence. The Mobile applications are made using the most fascinating and dynamic mobile platforms accessible today. These platforms include Android, Windows, and iOS. However Android is one of the most used OS’s in Mobile App development</p>
        </div>
        </div>
        <div className="Row">
            <div className="Customie">
                <img src={Androide} alt="Androide"/>
<h2>Easy to Customize</h2>
<p>Android has an extensive user base and has simplified mobile app development process. Enterprises leverage Android and create custom mobile apps that solve customer problems and increase value for their business</p>
            </div>
            <div className="Customie">
                <img src={Phone} alt="PhoneLogo"/>
<h2>Powerful Options</h2>
<p>The open source nature of Android has to be the most prominent advantage, which means the source code of the Development Kit (SDK) is entirely available for amendments as per the requirement of the developer. Developers can directly interact with the community. They have access to the best technology framework which results in faster development of applications and brings better opportunities for the app developers to earn more. Android supports Inter-Application Integration in which two different software can connect. This makes the Android platform attractive for handset manufacturers & wireless operators, resulting in faster development of Android-based phones.</p>
            </div>
        </div>
        <div className="Customie">
        <Link className="LinkRemove" to="/Contact">
        <h2 className="Lets">LET'WORK TOGETHER +</h2>
    </Link>

        </div>
        </div>
      <div className="AppGallery">
        <h1>APP Gallery</h1>
        <img src={Phones} alt="Mobile"/>
      </div>

        <BotttomPage/>
           </div>
        </div>
    )
}

export default AppDevelopment