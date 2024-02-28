import Raj from './Raj.png'

import Akshara from './Akshara.png'

import "./Partner.css"


const PartneresOpinion=()=>{
return(
    <div>
      <div className="ClientResponce">
    <h2>What Our <a>Partners</a> Say</h2>

    <div className="Row">
        <div className="ClientReport">
           <div className="Row ">
          <img className='PartnersLogo' src={Raj}alt="Raj"/>
            <div>
                <h2>RajKumar</h2>
                <p className="ClientrCompanyName">HCL</p>
            </div>
           </div>
           <p>“ Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.”</p>
        </div>
        <div className="ClientReport">
           <div className="Row">
           <img className='PartnersLogo' src={Akshara} alt="Akshara"/>
            <div>
                <h2>Akshara</h2>
                <p className="ClientrCompanyName">Director of SK Institution</p>
            </div>
           </div>
           <p>“ Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.”</p>
           </div>
    </div>

   </div>
    </div>
)
}

export default PartneresOpinion