import CommanHeadre from '../CommonHeader/CommonHeadre'

import AgilewitsIntro from '../AgilewitsIntro/AgilewitsIntro'

import BotttomPage from '../BottomPage/BottomPage'

import PartneresOpinion from '../PartenrsOpinion/PartnersOpinion'

import "./AboutUs.css"

import PicAboutUs from './AboutImage.png'

const AboutUs=()=>{
return(
    <div className='AboutTopLayer'>
        <AgilewitsIntro/>
       <div className='AboutpageSecondLayer'>
        <CommanHeadre PageName="About Us"/>
        <div className='AgilewitsInfo'>

<img src={PicAboutUs} alt="AboutImage"/>

<div className="AgilewitsBio" >
    <h1 className='Headfont'>Welcome to 
Agilewit Solutions Inc</h1>
<p className='Headfont'>Agilewit Solutions is incorporated as a Technology Consulting services and Software product development firm. Head quartered in Texas and Offshore development centers in India, we have involved in creating strategy, implementing, deploying, and supporting a wide range of solutions for clients worldwide. Our clients include a varied set of Fortune 500, free essay example mid-sized and startup companies. They count on us to provide them with timely, high-quality work and they return to us because we’re reliable, experienced and easy to work with.</p>
</div>
        </div>
        <div>
            <h1>Sidd</h1>
            <h1>Sidd</h1>
            <h1>Sidd</h1>
            <h1>Sidd</h1>
        </div>
        <PartneresOpinion/>
        <BotttomPage/>
        </div>
    </div>
)
}

export default AboutUs