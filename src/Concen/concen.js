import AgilewitsIntro from '../AgilewitsIntro/AgilewitsIntro'

import CommanHeadre from '../CommonHeader/CommonHeadre'

import BotttomPage from '../BottomPage/BottomPage'

import Conce from './Concen.png'

import ConceLoginPic from './ConcenLogin.png'

import Gif from"./upload-documents.gif"

import { useContext } from 'react'

import Context from '../Context/Context'

import {Link} from 'react-router-dom'


import Option from '../Home/Options.png'


import Chat from '../Home/chat.png'

import "./Conce.css"

import DropDown from '../DropDown/DropDown'

const Concen=()=>{

  const { IsActive, SetDropDownStatus, } = useContext(Context)
  const DropDownStatus = () => {
      SetDropDownStatus()
  }

    return(
        <div className="ToplAYER">
          <AgilewitsIntro/>
          
          <div className="Second">

          <img className="ChatLogo" src={Option} alt="ChatLogo" onClick={DropDownStatus} />

          <div className='ConceSecondLayer'>
<CommanHeadre PageName="Concen"/>
<div className='AgilewitsInfo'>

<img src={Conce}  alt="AboutImage" />

<div className="AgilewitsBio" >
    <h1 className='Headfont'>CONSEN</h1>
    
    {IsActive && <DropDown />}
<p className='Headfont'>CONSEN is one of the products of the AGILEWIT SOLUTIONS INC. This application reads the coulmn data provided in excel sheet and update the word document with the data provided in the excel sheet. Save the updated word document in the local directory. The updated Word documents are then converted into PDF. This PDF files are sent as a attachment to the email address provided in the excel sheet.</p>
</div>
        </div>
        <div className='ConcenInfo'>
<div className='ConceLogin'>
  
<div className='LoginInfor'>
    <h2>LOGIN</h2>
    <ul >
  <li>Provide user name, password</li>
  <li>Provide the SMTP/POP server name from which domain you are sending (servername: send.one.com and port number: 587(depends on the domain provider))</li>
  <li>Make sure to check “Check label” not to repeat the details. If the details repeat close and run the application again</li>
</ul>
<div>
<img src={Gif} alt="FormDocument" className='GifLogin'/>
</div>
</div>
<div className='LoginInfor'>
<img src={ConceLoginPic} alt="Logo"/>
<h2>LOAD DOCUMENTS </h2>
<ul >
  <li>Create two empty directories Like WORD_CREATED, PDF_FILES.</li>
  <li>Word File: The original word file with editable merge fields in the desired positions How to add merge fields</li>
  <li>Insert-Explore Quick parts-ields-MergeFields-Add a Field Name</li>
  <li>The mergefield name should be same as Column Name in Excel.Press “Submit”</li>
  <li>Excel File: The excel with the mergefield data Press “Submit”</li>
  <li>Directory Path: Load the path of the Directory (WORD_CREATED, PDF_FILES) where to save the updated Document and press "Submit"</li>
  <li>Sheet Number: Provide the sheet number of the date</li>
  <li>Make sure not to repeat the details</li>
  <li>EXIT</li>
</ul>

</div>
</div>
        </div>
<BotttomPage/>
          </div>
          <Link to="/Contact" className="ChatLogo">                
                <img  src={Chat} alt="ChatLogo" />
                </Link>
          </div>
        </div>
    )

}

export default Concen