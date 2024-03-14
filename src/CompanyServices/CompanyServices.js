import './CompanyService.css'
import {Link} from 'react-router-dom'

const Service=(props)=>{

    const{Details}=props
    const{ServiceName,ServiceDesription,ServiceLogo}=Details

    return(
     


<div class="ServiceTopLayer">
    <div class="ServiceContent">
    <img src={ServiceLogo} alt="ServieLogo" className='ServiceLogo' />
            <h3>{ServiceName}</h3>
            <p>{ServiceDesription}</p>

    </div>
    <div class="SeeMore">
        <Link to={`/${ServiceName}`}>
        <h1>See More</h1>
        </Link>
    </div>
</div>

    )

}

export default Service