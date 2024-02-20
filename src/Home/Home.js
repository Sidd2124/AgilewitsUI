import "./Home.css"

import LogoOne from './logo1.png'
import LogoTwo from './Logo2.png'

import LogoThree from './logo3.png'

import Prime from './PrimeLogo.png'
import CompanyLogo from './Company.png'
import Counsulting from './Counsulting.png'
import AppDevelop from './AppDevelopment.png'
import AuthorOne from './Raj.png'
import AuthorTwo from './Akshara.png'
import LastLogo from "./CompanWhiteLogo.png"
import Facebook from './Facebook.png'
import Twitter from './Twitter.png'
import Linkedin from './Linkedin.png'

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
<div className="Achievments">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="currentColor"><path d="M12 7.00002C16.4183 7.00002 20 10.5817 20 15C20 19.4183 16.4183 23 12 23C7.58172 23 4 19.4183 4 15C4 10.5817 7.58172 7.00002 12 7.00002ZM12 10.5L10.6775 13.1797L7.72025 13.6094L9.86012 15.6953L9.35497 18.6406L12 17.25L14.645 18.6406L14.1399 15.6953L16.2798 13.6094L13.3225 13.1797L12 10.5ZM13 1.99902L18 2.00002V5.00002L16.6366 6.13758C15.5305 5.55773 14.3025 5.17887 13.0011 5.04951L13 1.99902ZM11 1.99902L10.9997 5.04943C9.6984 5.17866 8.47046 5.55738 7.36441 6.13706L6 5.00002V2.00002L11 1.99902Z"></path></svg>
    <h1>100</h1>
    <p>TRAINED PROFETIONALS</p>
</div>
<div className="Achievments">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="currentColor"><path d="M12 19H14V6.00003L20.3939 8.74028C20.7616 8.89786 21 9.2594 21 9.65943V19H23V21H1V19H3V5.6499C3 5.25472 3.23273 4.89659 3.59386 4.73609L11.2969 1.31251C11.5493 1.20035 11.8448 1.314 11.9569 1.56634C11.9853 1.63027 12 1.69945 12 1.76941V19Z"></path></svg>
    <h1>55</h1>
    <p>INDUSTRY PLACEMENTS</p>
</div>
<div className="Achievments">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="currentColor"><path d="M12 10C14.2091 10 16 8.20914 16 6 16 3.79086 14.2091 2 12 2 9.79086 2 8 3.79086 8 6 8 8.20914 9.79086 10 12 10ZM5.5 13C6.88071 13 8 11.8807 8 10.5 8 9.11929 6.88071 8 5.5 8 4.11929 8 3 9.11929 3 10.5 3 11.8807 4.11929 13 5.5 13ZM21 10.5C21 11.8807 19.8807 13 18.5 13 17.1193 13 16 11.8807 16 10.5 16 9.11929 17.1193 8 18.5 8 19.8807 8 21 9.11929 21 10.5ZM12 11C14.7614 11 17 13.2386 17 16V22H7V16C7 13.2386 9.23858 11 12 11ZM5 15.9999C5 15.307 5.10067 14.6376 5.28818 14.0056L5.11864 14.0204C3.36503 14.2104 2 15.6958 2 17.4999V21.9999H5V15.9999ZM22 21.9999V17.4999C22 15.6378 20.5459 14.1153 18.7118 14.0056 18.8993 14.6376 19 15.307 19 15.9999V21.9999H22Z"></path></svg>  
  <h1>10</h1>
    <p>CLIENTS</p>
</div>
            </div>
            <div className="HomeFourthLayer">
<h3>What Our <a href="G">Partners</a> say</h3>

<div className="Horizontal">
    <div className="PartnersReport">
    <div className="Horizontal">
    <img src={AuthorOne} className="AuthorLogo" alt="Raj"/>
<div>
    <h4>RajKumat</h4>
    <p className="ClientCompany">HCL</p>
</div>
</div>
<p>“ Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.”</p>
    </div>
    <div className="PartnersReport">
<div className="Horizontal">
    <img src={AuthorTwo} className="AuthorLogo" alt="Raj"/>
<div>
    <h4>Akshara</h4>
    <p className="ClientCompany">Director of SK Institution</p>
</div>
</div>
<p>“ Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.”</p>    </div>

</div>



            </div>
            <div className="LastLayer">
                <div className="Horizontal">
                    <img src={LastLogo} alt="Company Logo"/>
<div className="Horizontal">
<img src={Facebook} className="SocialMediaLogo" alt="FaceBookLOGO"/>
<img src={Twitter} className="SocialMediaLogo" alt="TwitterLogo"/>
<img src={Linkedin} className="SocialMediaLogo" alt="LinkedinLogo"/>

</div>
                </div>
                <div className="HorizontalTwo">
<div className="Serives">
    <h4>EXPLORE</h4>
    <p>Aboute us</p>
    <p>Careers</p>
    <p>Career Options</p>
</div>
<div className="Serives">
    <h4>SERVICES</h4>
    <p>Counsulting</p>
    <p>App Devvelopement</p>
    <p>Training</p>
</div>
<div className="Serives">
    <h4>PRODUCT</h4>
    <p>CONSEN</p>
    
</div>
<div className="Serives">
    <h4>CONTACT</h4>
    <p>AGILEWIT SOLUTIONS INC
405 State Hwy 121 Bypass Suite A250,
Lewisville TX 75067
Phone Number: (516) 888-0089</p>
    <p>AGILEWIT SOLUTIONS PVT LTDH NO.3-1-101/6,Navodaya Colony,
Road No 2,Sbh Venture-I, LB NagarHyderabad,Telangana,India,50074
Phone Number: 040-48547228</p>
    <h7>info@agilewits.com</h7>
</div>
                </div>
<hr/>
<p>© Agilewit Solutions Inc</p>
            </div>
        </div>
    )
}

export default Home