import CommanHeadre from '../CommonHeader/CommonHeadre'

import AgilewitsIntro from '../AgilewitsIntro/AgilewitsIntro'

import BotttomPage from "../BottomPage/BottomPage"

import "./Training.css"

import React from './React.png'

import TrainingItems from '../TrainingItems/TrainingItems'

import JavaLogo from './Java.png'

import Machine from './Machine.png'

import html from "./HTML.png"

import Pythone from './Pythone.png'

import Robot from './Robot.png'

import Asp from './Asp.png'

import UI from './UI.png'

import Chat from '../Home/chat.png'

import Option from '../Home/Options.png'

import {Link} from 'react-router-dom'

import { useEffect,useState,useContext } from 'react'

import Context from '../Context/Context'

import DropDown from '../DropDown/DropDown'

const TrainingInfor=[
    {
        DomainName:"DatScience",
        ItemDescription:"Learn the fundamentals of JDBC and using the different interfaces in the JDBC API. Learn how to use Java servlets in the role of Web application control. Identify the options to state management in a Java Web application and understand the pros/cons of each. Understand how JSPs can help to separate Web logic and functionality from page layout. Explore how to make JSPs smaller and more powerful with JSTL, custom tags and expression language. Explore strategies in the exchange of data between Web pages (views) and business processing (model). Learn the meaning and importance of MVC",
        TrainingLogo:JavaLogo,
        Titlee:"Advance Java Trainimg Object Cource",
        ChildLogonThree:Pythone,
        ChildLogonTwo:html,
        ChildLogonOne: Machine,

    },
    {
        DomainName:"RPA",
        ItemDescription:"Nulla sed vehicula leo. Nam volutpat dapibus nisi sed ultrices. Proin ullamcorper eget ex a cursus. In sed turpis at orci laoreet ultrices et vitae urna.",
        TrainingLogo:Robot,
        Titlee:"Robotics Process Automation",
        ChildLogonThree:React,
        ChildLogonTwo:Machine,
        ChildLogonOne:Pythone,

    },
    {
        DomainName:"ASP Dotnet",
        ItemDescription:"ASP.NET training offers the most benefits to two kinds of IT professionals: early-stage Web developers who want to integrate dynamic data into their pages, and experienced programmers who want to integrate C# or Visual Basic code into live websites. Although most Web developers learn their craft by experimenting with code, Microsoft Certified Trainer Wesley Bakker notes that formal ASP.NET training can shorten the process of learning best practices for dealing with databases, site security, and other routine challenges for ASP developers.",
        TrainingLogo:Asp,
        Titlee:"GOALS OF ASP.NET TRAINING",
        ChildLogonThree:Machine,
        ChildLogonTwo: Pythone,
        ChildLogonOne:html,

    },
    {
        DomainName:"UI DEVELOPER",
        ItemDescription:"Agilewit Solutions provides hands on User Interface/Front End Development training from Industry trainers. All the clients in the world wide now define their products with Rich look and feel to their end users. At Agilewit, We train the depth concepts of User Interface Development. We train the techonlogies HTML/HTML5, CSS/CSS3, JavaScript, Object Oriented JavaScript, jQuery, AJAX, JSON, Responsive design and Client side MVC basics.",
        TrainingLogo:UI,
        Titlee:"User Interface Front End Development",
        ChildLogonThree:Machine,
        ChildLogonTwo:html,
        ChildLogonOne:React,

    },
]

const Training=()=>{
    const [Timer,SetTimer]=useState(0)

    const { IsActive, SetDropDownStatus, } = useContext(Context)
    const DropDownStatus = () => {
        SetDropDownStatus()
    }

    const Random=Math.ceil(Math.random()*3)
    useEffect(() => {
        const interval = setInterval(() => {
            const randomValue = Math.ceil(Math.random() * 3);
            SetTimer(randomValue);
        }, 1200);
    
        return () => {
            clearInterval(interval); // Clear interval on component unmount
        };
    }, [Random]); // Include Random in the dependency array
    
    return(
        <div className="ToplAYER">
            <AgilewitsIntro/>
            <div className="Second">

                
            <img className="ChatLogo" src={Option} alt="ChatLogo" onClick={DropDownStatus} />

            <div className='TrainingSecondLayer'>
            <CommanHeadre PageName="Training"/>
            <div className='TrainindDesription'>
            {IsActive && <DropDown />}
<h1>Our Trainings</h1>
<p>With a motive to provide an opportunity to the IT aspirants,to learn the software technologies and tools from the experienced and expert group of software professionals, Agilewit initiate to provide software training to the IT aspirants. the trainees get real industry exposure, which will help the trainees not only to learn the technologies but also become the experts of the technologies & tools.</p>
            <TrainingItems TringItemsInfo={TrainingInfor[Timer]}/>
            </div>
            <BotttomPage/>
            </div>

            <Link to="/Contact" className="ChatLogo">                
                <img  src={Chat} alt="ChatLogo" />
                </Link>
            </div>
        
         
        </div>
    )
}

export default Training