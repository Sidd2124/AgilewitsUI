import "./CommanHeadre.css"

import CompanyLargecone from "../Home/CompanyLargecone.png"
import Context from '../Context/Context'

import { useContext } from "react"

import DropDown  from "../DropDown/DropDown"

import Option from '../Home/Options.png'

const CommanHeadre=(props)=>{
    
    const{PageName}=props
    const{IsActive,SetDropDownStatus}=useContext(Context)
    const DropDownStatus=()=>{
        SetDropDownStatus()
    }
return(
    <div className="HeaderTop" >
        
      <img className="ChatLogo" src={Option} alt="ChatLogo" onClick={DropDownStatus}  />
      <div className="HeaderTopLayer">
        <h1 className="PageName">
            {PageName}
        </h1>

        {IsActive&&<DropDown/>}
        <img className="PrimeIcone"  src={CompanyLargecone} alt="PrimeIcone"/>
        </div>    
    </div>
)
}

export default CommanHeadre