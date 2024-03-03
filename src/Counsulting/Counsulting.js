import './Counsulting.css'

import AgilewitsIntro from '../AgilewitsIntro/AgilewitsIntro'

import CommanHeadre from '../CommonHeader/CommonHeadre'

import BotttomPage from '../BottomPage/BottomPage'

import { useState } from 'react'

import Bi from './Bi.png'
import IBM from  "./Ibm.png"

import Oracles from './Oracle.png'

import BigDataAnalyst from './Data.png'








const Counsulting=()=>{
    const [CounsultingStatus,SetCounsultingStatus]=useState("BussinessIntelligence")

    const UpdateBussinessIntelligence = () => {
        SetCounsultingStatus("BussinessIntelligence");
    };


    const IBMDataStage=()=>{
        SetCounsultingStatus("IBMDataStage")
    }

    const UpdateOracle=()=>{
        SetCounsultingStatus("OracleBusinessIntelligence")
    }

    const UpdateBigData=()=>{
        SetCounsultingStatus("Big Data Analytics")
    }

    const UpdateDATASCIENCE=()=>{
        SetCounsultingStatus("DATA SCIENCE")
    }

    const BussinessIntelligence=()=>{
        return(
            <div className='Bi'>
                <h1>BussinessIntelligence</h1>
                <p>With our business intelligence that includes courses from Dell, , Oracle, and SAP, you can develop solid business intelligence and analytical skills and learn how to access the right data to enable you to make better-informed decisions in less time.
These courses help you reach the next level in your career as you learn to use business intelligence systems that reduce the complexity of organizing and distributing business information.</p>
            <img src={Bi} alt="BiLogo" className='BiLogo'/>
            </div>
        )
    }

    const IBMDataStageView=()=>{
        return(
            <div className='Bi'>
                <h1>IBMDataStageView</h1>
                <h2 className='IbmBlue'>IBM InfoSphere DataStage Benefits</h2>
            <ul>
            <li>Can connect to different Data Sources & Targets like Databases, Sequential Files, SAP, JD Edwards, Oracle Applications, People Soft, Siebel CRM, Hashed Files, MQ Series, SAS, Mainframes etc.</li>
            <li>DataStage with Parallel Extender capability harnesses the power of parallel computing for processing very huge volumes like Tera/Peta Bytes of data in a minimum amount of time.</li>
            <li>Interfacing multiple databases, WebSphere MQ to provide realtime processing capabilities and deploy the DataStage Jobs as web services.</li>
            <li>With job optimizer capability rewrites the code/job already being developed for best performance.</li>
            <li>With NLS capability it can process the Unicode data easily.</li>
            <li>Deliver data in batch or real time through visually designed logic.</li>
            <li>Hundreds of built-in transformation functions.</li>
            <li>Metadata-driven productivity, enabling collaboration.</li>
            </ul>
            <img src={IBM} alt="BiLogo" className='BiLogo'/>
            <h2 className='IbmBlue'>The Agilewit Solutions Inc DataStage Advantage</h2>
            <p>Agilewit Solutions Inc an IBM’s SWG Software Group Direct Partner supplies IBM Certified DataStage Solution Developers with huge experience to all our clients. All our IBM InfoSphere DataStage Consultants have extensive experience and specialization which includes:</p>
            <ul>
                <li>IBM InfoSphere DataStage Capacity Planning</li>
                <li>IBM InfoSphere DataStage Installation and Configuration.</li>
                <li>IBM InfoSphere DataStage High Availability.</li>
                <li>IBM InfoSphere DataStage Data Warehouse Implementation.</li>
                <li>IBM InfoSphere DataStage Data Integration Implementation</li>
                <li>IBM InfoSphere DataStage Data Conversion Implementation.</li>
                <li>IBM InfoSphere DataStage complex Data Management Implementation.</li>
                <li>IBM InfoSphere Master Data Management Implementation</li>
                <li>IBM InfoSphere DataStage Administration.</li>
            </ul>
            </div>
        )
    }

    const Oracle=()=>{
        return(
            <div className='Bi'>
                <h1>Oracle BI Stack Components</h1>
                <ul>
                    <li>BI Answers – Fully interactive and drillable charts, pivot tables and reports that can be created by the business users by using a logical view of the information instead of using complex database structure. It is a new generation Ad-hoc Reporting and Querying tool.</li>
                    <li>BI Interactive Dashboards – Aggregate content and applications are presented through the interactive dashboards that are dynamically personalized based on the user’s role and identity.</li>
                    <li>BI Delivers – Supports Business Activity Monitoring and Alerting through multiple channels such as email, dashboards and mobiles.</li>
                    <li>Disconnected Analytics – Enables full analytical functionality for the mobile professional who is disconnected from the Corporate Network.</li>
                    <li>BI Publisher – This component is an Enterprise Reporting and Distribution tool where reports designed for MS Word or Adobe Acrobat can be delivered via printer, email, fax, webDAV or published to a portal.</li>
                    <li>Briefing Books – This tool enables users to create snapshots for viewing them offline or sharing with others. These snapshots have paging control and are well suited to present information to others.</li>
                </ul>
                <img src={Oracles} alt="BiLogo" className='BiLogo'/>
                <h2 className='IbmBlue'>Hyperion Stack Components</h2>
                <ul>
                    <li>Proven expertise in implementing and tuning Hadoop-related frameworks and tools: Mahout, Hive, Pig, Chukwa, Oozie, ZooKeeper, etc.; profound experience in NoSQL and distributed computing solutions</li>
                    <li>90% of team members are senior or mid-level software engineers; a documented low retention rate</li>
                    <li>Weekly invoices and timesheets for work done during the previous week</li>
                    <li>Weekly invoices and timesheets for work done during the previous week</li>
                    <li>A key role in helping its customers to create over $500M of enterprise value and raise $120M+ in venture funding</li>
                    <li>Access to our R&D department that tracks the most innovative technologies to help our customers to deliver software faster, with improved performance, and at a lower cost</li>
                </ul>
                <p>With OBIEE you can also empower business users with the tools to make decisions and allow them to use the latest technologies for creating interactive web reports and web dashboards.</p>
            <h2 className='IbmBlue'>OBIEE consists of all the Business Intelligence</h2>
            <h2 className='IbmBlue'>Software you need to start Enhancing your Business.</h2>
            </div>
        )
    }

    const BigDateAnalytics=()=>{
        return(
            <div className='Bi'>
                <h1>BigDateAnalytics</h1>
                <p>According to Gartner, through 2015 more than 85% of Fortune 500 organizations will fail to effectively use big data. The reason is that the size, complexity of formats, and speed of delivery will exceed the capabilities of traditional data management technologies. Having experience in installing, configuring, and tuning deployments for large-scale systems, the team of Hadoop developers at Agilewit Solutions Incs can help software companies to address their data processing needs related to data mining, analysis, scaling, etc. Agilewit Solutions Incs has implemented Hadoop solutions for a number of projects that included speeding up the search process and search filtering, building a search recommendation engine, dataset mining and aggregation, data warehousing, real-time reporting, and more.</p>
                <h2 className='IbmBlue'>Focused Hadoop Services</h2>
                <ul>
                    <li>Provide an initial Hadoop proof of concept to help enterprises to adopt the system</li>
                    <li>Find and develop algorithms for distributed computing of custom processes</li>
                    <li>Build distributed systems that scale to petabytes of data and hundreds of nodes</li>
                    <li>Develop tools to automate the deployment, administration, and performance monitoring of large Hadoop clusters</li>
                </ul>
                <img src={BigDataAnalyst} alt="BigDataAnalystLogo"/>
                <h2 className='IbmBlue'>Benefits to Your Company</h2>
                <ul>
                    <li>Proven expertise in implementing and tuning Hadoop-related frameworks and tools: Mahout, Hive, Pig, Chukwa, Oozie, ZooKeeper, etc.; profound experience in NoSQL and distributed computing solutions</li>
                    <li>90% of team members are senior or mid-level software engineers; a documented low retention rate</li>
                    <li>Weekly invoices and timesheets for work done during the previous week</li>
                    <li>Weekly invoices and timesheets for work done during the previous week</li>
                    <li>A key role in helping its customers to create over $500M of enterprise value and raise $120M+ in venture funding</li>
                    <li>Access to our R&D department that tracks the most innovative technologies to help our customers to deliver software faster, with improved performance, and at a lower cost</li>
                </ul>
            </div>
        )
    }

    const CounsultingDescription = () => {
        switch (CounsultingStatus) {
            case "BussinessIntelligence":
                return <BussinessIntelligence />;
                case "IBMDataStage":
                    return <IBMDataStageView/>;
                    case "OracleBusinessIntelligence":
                        return <Oracle/>;
                        case "Big Data Analytics":
                            return <BigDateAnalytics/>
            default:
                return null;
        }
    };

    return(
        <div className='CounsultingTopLayer'>
           <AgilewitsIntro/>
           <div className='CounsultingSecondLayer'>
            <CommanHeadre PageName="Counsulting"/>
            <div className='CounsultingTopics'>
<div className='TopicItems'>
    <h3 onClick={UpdateBussinessIntelligence} style={{ color: CounsultingStatus==="BussinessIntelligence"?"white":"#92D5F0" }}>BussinessIntelligence</h3>
<hr/>
<h3 onClick={IBMDataStage} style={{ color: CounsultingStatus==="IBMDataStage"?"white":"#92D5F0" }}>IBM DataStage</h3>
<hr/>
<h3 onClick={UpdateOracle} style={{ color: CounsultingStatus==="OracleBusinessIntelligence"?"white":"#92D5F0" }}>Oracle Business Intelligence</h3>
<hr/>
<h3 onClick={UpdateBigData} style={{ color: CounsultingStatus==="Big Data Analytics"?"white":"#92D5F0" }}>Big Data Analytics</h3>
<hr/>
<h3 onClick={UpdateDATASCIENCE} style={{ color: CounsultingStatus==="DATA SCIENCE"?"white":"#92D5F0" }}>DATA SCIENCE</h3>

</div>
{CounsultingDescription()}
<div>
   
</div>
            </div>
            <BotttomPage/>

           </div>
        </div>
    )
}

export default  Counsulting