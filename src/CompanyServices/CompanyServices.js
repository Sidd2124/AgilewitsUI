import './CompanyService.css'

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
        <h1>See More</h1>
    </div>
</div>

    )

}

export default Service