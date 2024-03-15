import AgilewitsIntro from "../AgilewitsIntro/AgilewitsIntro"
import './Home.css'
import Chat from './chat.png'
import Option from './Options.png'
import { Link } from 'react-router-dom'
import DropDown from '../DropDown/DropDown'

import FirstClient from './Client1.png'

import SecondClient from './Client2.png'

import ThirdClient from './Client3.png'

import FourthClient from './Client4.png'

import { useContext } from "react"

import Context from '../Context/Context'

import BotttomPage from '../BottomPage/BottomPage'

import BigIcone from './CompanyLargecone.png'

import Service from '../CompanyServices/CompanyServices'

import Counsukting from './Counsulting.png'

import Development from './AppDevelopment.png'

import Training from './Trainig.png'

import HomeConstants from '../Constants/HomeConstants'

import PartneresOpinion from "../PartenrsOpinion/PartnersOpinion"

let ServiceInformation = [{
    ServiceName: "Counsulting",
    ServiceDesription: "Our consulting services involve a wide range of services like Business Intelligence, IBM DataStage, Oracle BI, Big Data Analytics, Data Science",
    ServiceLogo: Counsukting

}, {
    ServiceName: "AppDevelopment",
    ServiceDesription: "Agilewit Solutions is incorporated as a Technology Consulting services and Software product development firm. Head quartered in Texas and Offshore development centers in India, we have involved in creating strategy, implementing, deploying, and supporting a wide range of solutions for clients worldwide",
    ServiceLogo: Development

}, {
    ServiceName: "Training",
    ServiceDesription: "With a motive to provide an opportunity to the IT aspirants,to learn the software technologies and tools from the experienced and expert group of software professionals,",
    ServiceLogo: Training

},]

const Home = () => {
    const { Caption,
        IntroLineOne,
        IntroLineTwo,
        IntroLineThree,
        Tag,
        Contact,
        Ideas,
        IdeaDescription,
        Services,
        NumberOfProfetionals,
        ProfetionalTitle,
        NumberOfPlacements,
        NumberOfClients,
        PlacementsTitle,
        ClientsTitle } = HomeConstants
    const { IsActive, SetDropDownStatus, } = useContext(Context)
    const DropDownStatus = () => {
        SetDropDownStatus()
    }
    return (
        <div className="ToplAYER">

            <AgilewitsIntro />

            <div className="Second">
                <img className="ChatLogo" src={Option} alt="ChatLogo" onClick={DropDownStatus} />

                <div className="SecondLayer">
                    <div className="Title">
                        <div className="Horizontal">
                            <p>{IntroLineOne}</p>
                            <p>{IntroLineTwo}</p>
                            <p>{IntroLineThree}</p>
                        </div>


                        <h1 className="Caption">{Caption}</h1>
                        <p>{Tag}</p>

                        <Link className="LinkRemove" to="/Contact">
                            <p>{Contact}</p>
                        </Link>


                        {IsActive && <DropDown />}

                    </div>
                    <div className="Description">
                        <div className="Row">
                            <h3 className="ClientServiceTag">{Ideas}</h3>
                            <p className="ClientServiceDescription">{IdeaDescription}</p>
                        </div>
                        <div className="Row Filter">
                            <img src={FirstClient} alt="ClientCompanyLogo" />
                            <img src={SecondClient} alt="ClientCompanyLogo" />
                            <img src={ThirdClient} alt="ClientCompanyLogo" />
                            <img src={FourthClient} alt="ClientCompanyLogo" />
                        </div>
                        {IsActive && <DropDown />}

                        <h1 className="ClientServiceTag">{Services}</h1>
                        <div className="Row">
                            <img className="BigLogo" src={BigIcone} alt="Logo" />
                            <div className="ServiceDetails">
                                {ServiceInformation.map((each,index) => <Service Details={each} key={index} />)}

                            </div>

                        </div>


                    </div>
                    <div className="Achievments">
                        <div className="AchievmentsItems">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64" fill="currentColor"><path d="M12 6.99999C16.4183 6.99999 20 10.5817 20 15C20 19.4183 16.4183 23 12 23C7.58172 23 4 19.4183 4 15C4 10.5817 7.58172 6.99999 12 6.99999ZM12 8.99999C8.68629 8.99999 6 11.6863 6 15C6 18.3137 8.68629 21 12 21C15.3137 21 18 18.3137 18 15C18 11.6863 15.3137 8.99999 12 8.99999ZM12 10.5L13.3225 13.1797L16.2798 13.6094L14.1399 15.6953L14.645 18.6406L12 17.25L9.35497 18.6406L9.86012 15.6953L7.72025 13.6094L10.6775 13.1797L12 10.5ZM18 1.99999V4.99999L16.6366 6.13755C15.5305 5.5577 14.3025 5.17884 13.0011 5.04948L13 1.99899L18 1.99999ZM11 1.99899L10.9997 5.04939C9.6984 5.17863 8.47046 5.55735 7.36441 6.13703L6 4.99999V1.99999L11 1.99899Z"></path></svg>
                            <h1>{NumberOfProfetionals}</h1>
                            <p>{ProfetionalTitle}</p>
                        </div>
                        <div className="AchievmentsItems">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64" fill="currentColor"><path d="M3 19V5.70046C3 5.27995 3.26307 4.90437 3.65826 4.76067L13.3291 1.24398C13.5886 1.14961 13.8755 1.28349 13.9699 1.54301C13.9898 1.59778 14 1.65561 14 1.71388V6.6667L20.3162 8.77211C20.7246 8.90822 21 9.29036 21 9.72079V19H23V21H1V19H3ZM5 19H12V3.85543L5 6.40089V19ZM19 19V10.4416L14 8.77488V19H19Z"></path></svg>   
                             <h1>{NumberOfPlacements}</h1>
                            <p>{PlacementsTitle}</p>
                        </div>
                        <div className="AchievmentsItems">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64" fill="currentColor"><path d="M12 10C14.2091 10 16 8.20914 16 6 16 3.79086 14.2091 2 12 2 9.79086 2 8 3.79086 8 6 8 8.20914 9.79086 10 12 10ZM5.5 13C6.88071 13 8 11.8807 8 10.5 8 9.11929 6.88071 8 5.5 8 4.11929 8 3 9.11929 3 10.5 3 11.8807 4.11929 13 5.5 13ZM21 10.5C21 11.8807 19.8807 13 18.5 13 17.1193 13 16 11.8807 16 10.5 16 9.11929 17.1193 8 18.5 8 19.8807 8 21 9.11929 21 10.5ZM12 11C14.7614 11 17 13.2386 17 16V22H7V16C7 13.2386 9.23858 11 12 11ZM5 15.9999C5 15.307 5.10067 14.6376 5.28818 14.0056L5.11864 14.0204C3.36503 14.2104 2 15.6958 2 17.4999V21.9999H5V15.9999ZM22 21.9999V17.4999C22 15.6378 20.5459 14.1153 18.7118 14.0056 18.8993 14.6376 19 15.307 19 15.9999V21.9999H22Z"></path></svg>
                            <h1>{NumberOfClients}</h1>
                            <p>{ClientsTitle}</p>
                        </div>
                    </div>

                    <PartneresOpinion />
                    <BotttomPage />
                </div>
                <Link to="/Contact" className="ChatLogo">                
                <img  src={Chat} alt="ChatLogo" />
                </Link>



            </div>
        </div>

    )
}

export default Home