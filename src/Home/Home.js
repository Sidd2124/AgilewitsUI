import "./Home.css"

import LogoOne from './logo1.png'
import LogoTwo from './Logo2.png'

import LogoThree from './logo3.png'

import Prime from './PrimeLogo.png'
import CompanyLogo from './Company.png'
import Counsulting from './Counsulting.png'
import AppDevelop from './AppDevelopment.png'


const Home=()=>{
    return(
        <div>
            <div className="HomeFirstLayer">
<h4>WE ARE Agilewit</h4>
<h1 className="Heading">Innovate with Our Tech Experts.</h1>
<p className="Desription"> Elevate Your Business with Our Technology Consulting and Software Development Expertise</p>
<p>Let’s work together+</p>
            </div>
            <div className="HomeSecondLeyar">
                <div className="Horizontal">
                <h6>You Share your ideaWe get it done</h6>
                <p className="SecondLayerDesription">Agilewit Solutions is incorporated as a Technology Consulting services and Software product development firm. Head quartered in Texas and Offshore development centers in India, we have involved in creating strategy, implementing, deploying, and supporting a wide range of 
solutions for clients worldwide</p>

</div>
<div className="HorizontalTwo">
    
<img src={Prime} className="Logo" alt="lOGO"/>
<img src={LogoOne} className="Logo" alt="lOGO"/>


<img src={LogoTwo} className="Logo" alt="lOGO"/>

<img src={LogoThree} className="Logo" alt="lOGO"/>
</div>

<div className="HorizontalTwo">
    <div>
        <h3>See what  we can do for you</h3>
        <img src={CompanyLogo} alt="CompanyLogo"/>
    </div>
<div className="HorizontalTwo">
    <div className="CompanyDetails">
        <div className="DetailsLogo">
<img src={Counsulting} alt="CounsultingLogo"/>
        </div>
<h1>Counsulting</h1>
<p>Our consulting services involve a wide range of services like Business Intelligence, IBM DataStage, Oracle BI, Big Data Analytics, Data Science</p>
    <h3 className="Seemore">See More</h3>
    </div>
    <div className="CompanyDetails">
        <div className="DetailsLogo">
<img src={AppDevelop} alt="CounsultingLogo"/>
        </div>
<h1>App Development</h1>
<p>Agilewit Solutions is incorporated as a Technology Consulting services and Software product development firm. Head quartered in Texas and Offshore development centers in India, we have involved in creating strategy, implementing, deploying, and supporting a wide range of solutions for clients worldwide</p>
    <h3 className="Seemore">See More</h3>
    </div>
      
   

</div>
</div>


            </div>
            <div className="HomeThirdLayer">
<div>
    <h1>100</h1>
    <p>TRAINED PROFETIONALS</p>
</div>
            </div>
        </div>
    )
}

export default Home