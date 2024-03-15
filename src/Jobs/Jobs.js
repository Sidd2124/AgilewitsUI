import JobItem from '../JobItems/Jobitem'

import AgilewitsIntro from '../AgilewitsIntro/AgilewitsIntro'

import CommanHeadre from '../CommonHeader/CommonHeadre'

import BotttomPage from '../BottomPage/BottomPage'

import "./Jobs.css"

import { useState } from 'react'

import NoJobs from './No-Jobs.png'

const JobInfo=[
 
    { Type: 'Contract',
    
    JobDuties:[
        "Serve as primary System Administrator for the Salesforce environments",
        "Handle all administrative functions including user account maintenance, reports and dashboards, workflows, and other routine tasks.",
        "Respond to end user issues, enhancement requests and other administrative needs.",
        "Coordinate the evaluation, scope, and completion of new development requests.",
        "Manage the integration of applications connected to Salesforce.",
        "Work independently with members of the user community to define and document development requirements. Facilitate backlog grooming session.",
        "Effectively act as the liaison between our users and application development team",
        "Complete regular internal system audits and prepare for upgrades.",
        "Work with line of business partners to establish suitable processes to support development and change management activities.",
        "Assist in training of new users and grow the Salesforce skill set and adoption across the organization.",
        "Perform testing of features/functions as required.",
        "Integrate Salesforce with applications such as Active Directory, in house and Third-party applications.",
        "Ensure configuration consistency across development, test, and production environments.",
        "Create external objects and integrated with Oracle database using lightning connect and O-Data protocol.",
        "Develop Apex triggers, apex classes, batch apex and schedule apex to automate the business processes.",
        "Develop Visualforce pages from scratch to customize the user interface using various controllers.",
        "Use JavaScript/J-query to perform client-side validations on Visualforce pages and to improve the performance of the User interface.",
        "Implemented and maintained Salesforce Service Cloud and Sales Cloud. Built custom solutions with Apex and Visualforce, which support most critical processes and workflows.",
        "Experience with Sales Cloud, Service Cloud and Marketing Cloud.",
        "Experience in working and configuring Apttus Intelligent Workflow Approvals.",
        "Hands on experience in building custom lightning components and lightning applications."
    ],
    JobRequirements:[
        "Salesforce certification is preferred",
        " Degree in Computer Science or a related technical field involving coding (e.g. physics or mathematics), orequivalent practical experience"
],
     Location: 'Bangalore',
     Country: 'India',
     Package: "7 LPA",
     Rating: 4,
     Title: "SALESFORCE ADMIN/DEV"
    },

     { Type: 'Contract',
     
     JobDuties:[
        "6+ years of professional backend or platform development experience.",
        "You have strong experience with object-oriented programming (e.g. C#, Java).",
        "Strong knowledge of relational databases (e.g. SQL Server, Oracle, DB2, MySQL).",
        "Working knowledge of no-SQL databases (e.g. Mongo, DynamoDB, Cassandra, CosmoDB).",
        "You have the ability to explain technical concepts to developers, project managers, and technical managers.",
        "You are able and desire to work with a team of people solving complex problems that often require independent research with minimal supervision.",
        "Do you like asking questions, solving problems and thinking critically? You'll like it here.",
        "You have excellent problem solving and critical thinking skills."
    ],
    JobRequirements:[
        "You will work in a collaborative team environment with highly skilled specialists in many areas",
        "including:event-source systems, CQRS, distributed systems, Azure, Service-oriented Architecture.",
        "The products you build will be heavily-leveraged by other teams within PayScale."
    ],
     Location: 'Hyderabad',
     Country: 'India',
     Package: "6 LPA",
     Rating: 4,
     Title: "SOFTWARE ENGINEER"},

     {
         Type: 'Contract',JobDuties:[
        "Designs, modifies, develops, writes and implements software programming applications.",
        "Supports and/or installs software applications.",
        "Participates in the testing process through test review and analysis, test witnessing and certification of software.",
        "Relies on extensive experience and judgment to plan and accomplish goals.",
        "Able to demonstrate regular and predictable attendance during core business hours.",
        "May provide consultation on complex projects and is considered to be the top level contributor/specialist.",
        "A wide degree of creativity and latitude is expected.",
        "May report to a team lead or Architect"
    ],
    JobRequirements:[
      "Demonstrates hands-on experience in full development life cycle of Enterprise scaled software applications utilizing object oriented analysis, design, and implementation.",
      "Demonstrates expertise in Java/J2EE, Web services, JUnit, SQL and Spring. Knowledge of Apache Kafka, Hadoop and Jasper Report is a plus. Familiarity with Agile methodologies is a plus"
    ],
     Location: 'Hyderabad',
     Country: 'India',
     Package: "8 LPA",
     Rating: 4,
     Title: "JAVA DEVELOPER"
    },

     { Type: 'Contract',JobDuties:[
        "Work experience writing, testing, and implementing web sites and web applications utilizing HTML, CSS, JavaScript, server side language and a relational database",
        "Work experience using modern source control tools such as GIT",
        "Work experience in website maintenance and web applications development",
        "Knowledge of developmental methodologies, practices, principles, methodologies, and techniques of computer programming and systems analysis",
        "Knowledge of computer operations procedures and systems",
        "Knowledge of computer programming languages",
        "Skill in using logic and reasoning to identify the strengths and weaknesses of alternative solutions, conclusions, or approaches to problems",
        "Skill in identifying measures or indicators of program performance and troubleshooting related problems",
        "Skill in delivering and understanding complex, technical oral and written instructions and communicating with individuals having various levels of technical expertise and knowledge"
    
    ],
   
     Location: 'Hyderabad',
     Country: 'India',
     Package: "9 LPA",
     Rating: 4,
     Title: ".NET DEVELOPER"
    },


     { 
        Type: 'Contract',
        JobDuties:[
        "Solve problems and learn quickly",
        "Establishes networking environment by designing system configuration; directing system installation; defining, documenting, and enforcing system standards.",
        "Maximizes network performance by monitoring performance; troubleshooting network problems and outages; scheduling upgrades; collaborating with network architects on network optimization.",
        "Secures network system by establishing and enforcing policies; defining and monitoring access.",
        "Ability to design IT Network Architecture for new installations.",
        "Updates job knowledge by participating in educational opportunities; reading professional publications; maintaining personal networks; participating in professional organizations.",
        "Accomplishes information systems and organization mission by completing related results as needed.",
        "Reporting network operational status by gathering, prioritizing information; managing projects."
    
    ], JobRequirements:[
        "BS Degree in Engineering, Information Technology, or equivalent in Automation experience plus three years of experience",
    "CCNA Certification a plus",
    "Experience in Industrial Automation"
        ],
     Location: 'Hyderabad',
     Country: 'India',
     Package: "5 LPA",
     Rating: 4,
     Title: "NETWORK ENGINEER"},


     { Type: 'Contract',JobRequirements:[
        "Data Mining / ETL experience",
    "SAS Programming",
    "Machine Learning",
    ".Net development experience (C#)",
    "SQL Server",
    "Object Oriented Architecture Principles",
    "Experience with project management and delivery",
    "Distributed Version Control"
        ],
   
     Location: 'Hyderabad',
     Country: 'India',
     Package: "8 LPA",
     Rating: 4,
     Title: "Sr. PYTHON DEVELOPER"},
     
 
     { Type: 'Contract',JobDuties:[
        "Solve problems and learn quickly",
        "Establishes networking environment by designing system configuration; directing system installation; defining, documenting, and enforcing system standards.",
        "Maximizes network performance by monitoring performance; troubleshooting network problems and outages; scheduling upgrades; collaborating with network architects on network optimization.",
        "Secures network system by establishing and enforcing policies; defining and monitoring access.",
        "Ability to design IT Network Architecture for new installations.",
        "Updates job knowledge by participating in educational opportunities; reading professional publications; maintaining personal networks; participating in professional organizations.",
        "Accomplishes information systems and organization mission by completing related results as needed.",
        "Reporting network operational status by gathering, prioritizing information; managing projects."
    
    ], JobRequirements:[
        "BS Degree in Engineering, Information Technology, or equivalent in Automation experience plus three years of experience",
    "CCNA Certification a plus",
    "Experience in Industrial Automation"
        ],
   
     Location: 'Hyderabad',
     Country: 'USA',
     Package: "5 LPA",
     Rating: 4,
     Title: "NETWORK ENGINEER"},


     { Type: 'Contract',JobRequirements:[
        "Data Mining / ETL experience",
    "SAS Programming",
    "Machine Learning",
    ".Net development experience (C#)",
    "SQL Server",
    "Object Oriented Architecture Principles",
    "Experience with project management and delivery",
    "Distributed Version Control"
        ],
   
     Location: 'Hyderabad',
     Country: 'USA',
     Package: "8 LPA",
     Rating: 4,
     Title: "Sr. PYTHON DEVELOPER"},


     { 
        Type: 'Contract',
     
     JobDuties:[
        "Serve as primary System Administrator for the Salesforce environments",
        "Handle all administrative functions including user account maintenance, reports and dashboards, workflows, and other routine tasks.",
        "Respond to end user issues, enhancement requests and other administrative needs.",
        "Coordinate the evaluation, scope, and completion of new development requests.",
        "Manage the integration of applications connected to Salesforce.",
        "Work independently with members of the user community to define and document development requirements. Facilitate backlog grooming session.",
        "Effectively act as the liaison between our users and application development team",
        "Complete regular internal system audits and prepare for upgrades.",
        "Work with line of business partners to establish suitable processes to support development and change management activities.",
        "Assist in training of new users and grow the Salesforce skill set and adoption across the organization.",
        "Perform testing of features/functions as required.",
        "Integrate Salesforce with applications such as Active Directory, in house and Third-party applications.",
        "Ensure configuration consistency across development, test, and production environments.",
        "Create external objects and integrated with Oracle database using lightning connect and O-Data protocol.",
        "Develop Apex triggers, apex classes, batch apex and schedule apex to automate the business processes.",
        "Develop Visualforce pages from scratch to customize the user interface using various controllers.",
        "Use JavaScript/J-query to perform client-side validations on Visualforce pages and to improve the performance of the User interface.",
        "Implemented and maintained Salesforce Service Cloud and Sales Cloud. Built custom solutions with Apex and Visualforce, which support most critical processes and workflows.",
        "Experience with Sales Cloud, Service Cloud and Marketing Cloud.",
        "Experience in working and configuring Apttus Intelligent Workflow Approvals.",
        "Hands on experience in building custom lightning components and lightning applications."
    ],
    JobRequirements:[
        "Salesforce certification is preferred",
        " Degree in Computer Science or a related technical field involving coding (e.g. physics or mathematics), orequivalent practical experience"
],
     Location: 'Bangalore',
     Country: 'USA',
     Package: "7 LPA",
     Rating: 4,
     Title: "SALESFORCE ADMIN/DEV"},

     { Type: 'Contract',
     JobDuties:[
        "6+ years of professional backend or platform development experience.",
        "You have strong experience with object-oriented programming (e.g. C#, Java).",
        "Strong knowledge of relational databases (e.g. SQL Server, Oracle, DB2, MySQL).",
        "Working knowledge of no-SQL databases (e.g. Mongo, DynamoDB, Cassandra, CosmoDB).",
        "You have the ability to explain technical concepts to developers, project managers, and technical managers.",
        "You are able and desire to work with a team of people solving complex problems that often require independent research with minimal supervision.",
        "Do you like asking questions, solving problems and thinking critically? You'll like it here.",
        "You have excellent problem solving and critical thinking skills."
    ],
    JobRequirements:[
        "You will work in a collaborative team environment with highly skilled specialists in many areas",
        "including:event-source systems, CQRS, distributed systems, Azure, Service-oriented Architecture.",
        "The products you build will be heavily-leveraged by other teams within PayScale."
    ],
     Location: 'Hyderabad',
     Country: 'USA',
     Package: "6 LPA",
     Rating: 4,
     Title: "SOFTWARE ENGINEER"
    },

     { 
        Type: 'Contract',
     JobDuties:[
        "Designs, modifies, develops, writes and implements software programming applications.",
        "Supports and/or installs software applications.",
        "Participates in the testing process through test review and analysis, test witnessing and certification of software.",
        "Relies on extensive experience and judgment to plan and accomplish goals.",
        "Able to demonstrate regular and predictable attendance during core business hours.",
        "May provide consultation on complex projects and is considered to be the top level contributor/specialist.",
        "A wide degree of creativity and latitude is expected.",
        "May report to a team lead or Architect"
    ],
    JobRequirements:[
      "Demonstrates hands-on experience in full development life cycle of Enterprise scaled software applications utilizing object oriented analysis, design, and implementation.",
      "Demonstrates expertise in Java/J2EE, Web services, JUnit, SQL and Spring. Knowledge of Apache Kafka, Hadoop and Jasper Report is a plus. Familiarity with Agile methodologies is a plus"
    ],
     Location: 'Hyderabad',
     Country: 'USA',
     Package: "8 LPA",
     Rating: 4,
     Title: "JAVA DEVELOPER"
    },


     {
         Type: 'Contract',
         JobDuties:[
        "Work experience writing, testing, and implementing web sites and web applications utilizing HTML, CSS, JavaScript, server side language and a relational database",
        "Work experience using modern source control tools such as GIT",
        "Work experience in website maintenance and web applications development",
        "Knowledge of developmental methodologies, practices, principles, methodologies, and techniques of computer programming and systems analysis",
        "Knowledge of computer operations procedures and systems",
        "Knowledge of computer programming languages",
        "Skill in using logic and reasoning to identify the strengths and weaknesses of alternative solutions, conclusions, or approaches to problems",
        "Skill in identifying measures or indicators of program performance and troubleshooting related problems",
        "Skill in delivering and understanding complex, technical oral and written instructions and communicating with individuals having various levels of technical expertise and knowledge"
    
    ],
     Location: 'Hyderabad',
     Country: 'USA',
     Package: "9 LPA",
     Rating: 4,
     Title: ".NET DEVELOPER"
    
    },

    
    ]

    

const Jobs =()=>{
    const[JObCountry,SetJobCountry]=useState("India")
    const[SeachInputValue,SetSeachInputValue]=useState("")
    const [ButtonSearch,SetButtonSearch]=useState("")

    const UpdateCountry=(e)=>{
        SetJobCountry(e.target.value)
    }
   
    const UpdateSearchResult=()=>{
        SetButtonSearch(SeachInputValue)
        SetSeachInputValue("")
    }

    const UpdateInputValue=(e)=>{
        SetSeachInputValue(e.target.value)
    }
   
    const FilterdJobs=JobInfo.filter((each)=>each.Country.includes(JObCountry)&&each.Title.includes(ButtonSearch))
    return(
        <div className='JobsFirstLayer'>
            <AgilewitsIntro/>
             <div  className='JobsSecondLayer'>
                <CommanHeadre PageName="Careers"/>
                <div className='OpeningsHeading'>
                    <div>
             <h1 className='CurreniOpenings'>{FilterdJobs.length} Jobs Found for you...</h1>
             <div>
                <h3 >Choose By Country</h3>
             <section>
                <select onChange={UpdateCountry}>
                <option selected value="India">INDIA</option>
                <option value="USA">USA</option>
                </select>
             </section>
          
             </div>
             
             </div>
             <div className="search-container">
    <input 
        type='Text' 
        placeholder='Job Title or Keyword' 
      value={SeachInputValue}
        onChange={UpdateInputValue}
    />
    <svg 
        onClick={UpdateSearchResult} 
        xmlns="http://www.w3.org/2000/svg" 
        className='search-icon' 
        viewBox="0 0 24 24" 
        fill="currentColor"
    >
        <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
    </svg>
</div>


           
           
             </div>
        <div >
            {FilterdJobs.length===0?
            <div className='NOJobs'>
           
            <img src={NoJobs} alt="No Jobs Found" />
          
            <button onClick={UpdateSearchResult}>Back to Jobs</button>
            
            </div>
            
            :<div className='JobsTop'>  {FilterdJobs.map((each)=><JobItem JobItemsInfo={each}/>)}</div>}
           
          
        </div>
        <BotttomPage/>
             </div>
        </div>
    )
}

export default Jobs





