
import "./DropDown.css"

import Context from '../Context/Context'

import {Link} from 'react-router-dom'

import CloseIcon from './CloseIcon.png'
import { useContext } from 'react'
const DropDown=()=>{
    const {SetDropDownStatus}=useContext(Context)

    const SetDropDownHide=()=>{
        SetDropDownStatus()
    }
    return(
        <div className="DropDownProfile">
            
    <img  src={CloseIcon} alt="CloseIcone" onClick={SetDropDownHide} className='DropDownIcone'/>

    <div className="DropDownFirstLayer">
        <div className="DropDownSecondLayer">
<h1>EXPLORE</h1>
<h1>SERVICE</h1>
<h1>PRODUCT</h1>
        </div>

        <div className="DropDownSecondLayer">
            <div>

            <Link className="LinkRemove" to="/About" onClick={SetDropDownHide}>
                <p>ABOUT US</p>
    </Link>
                <p>CAREER OPENINGS</p>  
            </div>
            <div>
            <Link to="/Counsulting" className="LinkRemove" onClick={SetDropDownHide}>
    <p>COUNSULTING</p>
    </Link>
                <Link className="LinkRemove" to="/AppDevelopment" onClick={SetDropDownHide}>
                <p>APP DEVELOPEMENT</p>
    </Link>
                <Link to="/Training" className="LinkRemove" onClick={SetDropDownHide}>
                <p>TAINING</p>
                </Link>
               
            </div>
            <div>
            <Link to="/Concen" className="LinkRemove" onClick={SetDropDownHide}>
    <p>CONSEN</p>
    </Link>
            </div>
       
        </div>
      <Link to="/Contact">
        <p className="LetWorktogether"   onClick={SetDropDownHide}>LETS WORK TOGETHER +</p>
        </Link>
    </div>

        </div>
    )
}

export default DropDown