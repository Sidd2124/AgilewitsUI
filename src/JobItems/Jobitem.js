import './Jobitems.css'

import CountryLogo from './Ind.png'

import USAlog from './USA.png'

const JobItem=(props)=>{
    const{JobItemsInfo}=props
    const{CompanyLogo,Type,Description,Location,Country}=JobItemsInfo
    return(
        <div className='Jobitem'>
<img src={CompanyLogo} alt="Company Logo"/>
<h3>{Type}</h3>
<p>{Description}</p>
<p>{Location}</p>
<div className='CountryLogo'>
<p>{Country}</p>
{Country==="India"?<img className='indianLogo' src={CountryLogo} alt='Ind'/>:<img className='indianLogo' src={USAlog} alt='Ind'/>}
</div>

        </div>
    )
}

export default JobItem 

