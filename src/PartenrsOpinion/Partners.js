import "./Partner.css"

const Partners=(props)=>{
    const{PartnersInfo}=props
    const{PartnerName,PartnerCompantName,PartnerProfilePic,PartnerOpinion}=PartnersInfo
    return(
      <div className="ClientReport">
           <div className="Row ">
         {PartnerProfilePic&& <img className='PartnersLogo' src={PartnerProfilePic}alt={PartnerName}/>}
            <div>
                <h2>{PartnerName}</h2>
            {PartnerCompantName&& <p className="ClientrCompanyName">{PartnerCompantName}</p>}
            </div>
           </div>
           <p>{PartnerOpinion}</p>
        </div>
    )
}

export default Partners
