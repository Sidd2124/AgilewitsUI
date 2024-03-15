import './Jobitems.css'

import CountryLogo from './Ind.png'

import USAlog from './USA.png'

import Context from '../Context/Context'
import { useState,useContext } from 'react'

import {Link} from 'react-router-dom'



const JobItem = (props) => {
    const { JobItemsInfo } = props
    const { JobDuties, Location, Country, Title, Package,JobRequirements,Type } = JobItemsInfo
    const [Status, SetStatus] = useState(false)
    const{UpdateOpeningName,CareerJob}=useContext(Context)
    console.log(CareerJob)

    const UpdateStatus = () => {
        SetStatus(!Status)
    }


    const UpdateJobName=()=>{
        UpdateOpeningName(Title)
    }

    const Duties = () => {
        return (
            <div className='DesriptionInfo'>
                <svg onClick={UpdateStatus} className='svgLogo' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="92" height="42" fill="currentColor" style={{ position: 'absolute', top: 0, right: 0 }}>
                    <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
                </svg>
                {JobDuties&&<h1 className='JobDutiesTitle'>Job Duties</h1>}
                {JobDuties&&  <div>{JobDuties.map((each)=><ul className='Dutys'><li>{each}</li></ul>)}</div>}
               {JobRequirements&& <p className='JobDutiesTitle'>JOB REQUIREMENT</p>}
              {JobRequirements&&  <div>{JobRequirements.map((each)=><ul className='Dutys'><li>{each}</li></ul>)}</div>}
                <p className='JobDutiesTitle'>Contact</p>
                {Country==="USA"?<p>Mail application with resume ref job code# aws01 to <a href="Good">hr@agilewits.com</a>, Agilewit Solutions Inc 405 State Highway 121 Bypass Lewisville TX 75067</p>:<p>Mail application with resume ref job code# aws01 to <a href="Good">hr@agilewits.com</a>, Agilewit Solutions Pvt Ltd. H.No.1-90/7/53/P, Second Floor, Blossom Heights, Plot No. 53, Patrika Nagar, Madhapur, Hyderabad Telangana</p>
                }
                <p>Note: This position is eligible for company's employee referral award program. Please refer to the posted policy for details.</p>
                <div className='ApplyNowButton'>
                <Link onClick={UpdateJobName} to="/Application">    <button className='JobitemButton' >ApplyNow</button>
    </Link>
                    <p></p>
                </div>
            </div>
        );
    };
    
    return (
        <div className='Jobitem'>
            <div className='Row'>
                <h3>{Title}</h3>
{Status && Duties()}
            </div>

            <div className='Row'>
                <svg className='indianLogo' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="18" fill="currentColor"><path d="M7 5V2C7 1.44772 7.44772 1 8 1H16C16.5523 1 17 1.44772 17 2V5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V6C2 5.44772 2.44772 5 3 5H7ZM4 16V19H20V16H4ZM4 14H20V7H4V14ZM9 3V5H15V3H9ZM11 11H13V13H11V11Z"></path></svg>
                <p>{Package}</p>
            </div>
            <div className='Row'>
                <svg className='indianLogo' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="18" fill="currentColor"><path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"></path></svg>
                <p>{Location}</p>
                
            </div>
            <p>{Type}</p>
            <div className='CountryLogo'>
                <p>{Country}</p>
                {Country === "India" ? <img className='indianLogo' src={CountryLogo} alt='Ind' /> : <img className='indianLogo' src={USAlog} alt='Ind' />}
            </div>
<div className='Row'>
    <Link onClick={UpdateJobName} to="/Application">    <button className='JobitemButton' >ApplyNow</button>
    </Link>

    <button className='JobitemButton' onClick={UpdateStatus} >Details</button>

</div>
        </div>
    )
}

export default JobItem

