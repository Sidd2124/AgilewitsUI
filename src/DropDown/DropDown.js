
import "./DropDown.css"

import Context from '../Context/Context'

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
<h1>EXPLORE</h1>
<h1>EXPLORE</h1>
        </div>

        <div className="DropDownSecondLayer">
            <div>

                <p>ABOUTEUS</p>
                <p>CAREER OPENINGS</p>  
            </div>
            <div>
                <p>COUNSULTING</p>
                <p>APP DEVELOPEMENT</p>
                <p>TAINING</p>
            </div>
            <div>
                <p>CONCEN</p>
            </div>
       
        </div>
        <p className="LetWorktogether">LETS WORK TOGETHER +</p>
    </div>

        </div>
    )
}

export default DropDown