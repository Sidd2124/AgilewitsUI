import Raj from './Raj.png'

import Akshara from './Akshara.png'

import "./Partner.css"

import Partners from './Partners'

const PartnersOpinioList=[
{PartnerName:"RajKumar",
PartnerCompantName:"HCL",
PartnerProfilePic:Raj,
PartnerOpinion:`“The Team at Agilewit team is very experienced and the way they handle the problem is very efficient. I recommend Agilewit Solutions Inc for Data science projects. They helped me get predictions and get the patterns for the business”`,
},
{PartnerName:"Akshara",
PartnerCompantName:"Director of SK Institution",
PartnerProfilePic:Akshara,
PartnerOpinion:`“ I appreciate the work and the business strategy of the team of the Agilewit Solution Inc. The AI prediction systems designed by them helped my business to reach to the next Level.”`,
},
{PartnerName:"Praneeth",
PartnerCompantName:"",
PartnerProfilePic:"",
PartnerOpinion:`“ UX/UI Team at Agilewits Solutions Inc provided me a great professional designs to my institutions. I appreciate their work and I would recommend Agilewits to  business partners”`,
}
]


const PartneresOpinion=()=>{
return(
    <div>
      <div className="ClientResponce">
    <h2>What Our <a href="Google.com">Partners</a> Say</h2>

    <div className="Row">
      
       {PartnersOpinioList.map((each)=><Partners PartnersInfo={each}/>)}
    </div>

   </div>
    </div>
)
}

export default PartneresOpinion