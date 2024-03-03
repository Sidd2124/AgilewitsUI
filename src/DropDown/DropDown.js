
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

            <Link className="LinkRemove" to="/About">
                <p>ABOUR US</p>
    </Link>
                <p>CAREER OPENINGS</p>  
            </div>
            <div>
            <Link to="/Counsulting" className="LinkRemove">
    <p>COUNSULTING</p>
    </Link>
                <Link className="LinkRemove" to="/AppDevelopment">
                <p>APP DEVELOPEMENT</p>
    </Link>
                
                <p>TAINING</p>
            </div>
            <div>
            <Link to="/Concen" className="LinkRemove">
    <p>CONSEN</p>
    </Link>
            </div>
       
        </div>
        <p className="LetWorktogether">LETS WORK TOGETHER +</p>
    </div>

        </div>
    )
}

export default DropDown