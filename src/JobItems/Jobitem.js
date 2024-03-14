import './Jobitems.css'

import CountryLogo from './Ind.png'

import USAlog from './USA.png'
import { useState } from 'react'



const JobItem = (props) => {
    const { JobItemsInfo } = props
    const { Description, Location, Country, Title, Package } = JobItemsInfo
    const [Status, SetStatus] = useState(false)

    const UpdateStatus = () => {
        SetStatus(!Status)
    }
    return (
        <div className='Jobitem'>
            <div className='Row'>
                <h3>{Title}</h3>

                <svg onClick={UpdateStatus} className='InfoLogo' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 7H13V9H11V7ZM11 11H13V17H11V11Z"></path></svg>
                {Status && <div className='DesriptionInfo'><p>{Description}</p><svg onClick={UpdateStatus} className='svgLogo' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="72" height="72" fill="currentColor"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg>
                </div>}
            </div>

            <div className='Row'>
                <svg className='indianLogo' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="18" fill="currentColor"><path d="M7 5V2C7 1.44772 7.44772 1 8 1H16C16.5523 1 17 1.44772 17 2V5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V6C2 5.44772 2.44772 5 3 5H7ZM4 16V19H20V16H4ZM4 14H20V7H4V14ZM9 3V5H15V3H9ZM11 11H13V13H11V11Z"></path></svg>
                <p>{Package}</p>
            </div>
            <div className='Row'>
                <svg className='indianLogo' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="18" fill="currentColor"><path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"></path></svg>
                <p>{Location}</p>
            </div>
            <div className='CountryLogo'>
                <p>{Country}</p>
                {Country === "India" ? <img className='indianLogo' src={CountryLogo} alt='Ind' /> : <img className='indianLogo' src={USAlog} alt='Ind' />}
            </div>

        </div>
    )
}

export default JobItem

