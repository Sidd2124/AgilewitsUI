import CommanHeadre from '../CommonHeader/CommonHeadre'

import AgilewitsIntro from '../AgilewitsIntro/AgilewitsIntro'

import BotttomPage from '../BottomPage/BottomPage'

import PartneresOpinion from '../PartenrsOpinion/PartnersOpinion'

import "./AboutUs.css"

const AboutUs=()=>{
return(
    <div className='AboutTopLayer'>
        <AgilewitsIntro/>
       <div className='AboutpageSecondLayer'>
        <CommanHeadre PageName="About Us"/>
        <PartneresOpinion/>
        <BotttomPage/>
        </div>
    </div>
)
}

export default AboutUs