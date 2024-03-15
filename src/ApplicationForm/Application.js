import React, { useState, useRef, useContext } from "react";
import emailjs from "emailjs-com";
import "./JobApplicationForm.css";
import Context from '../Context/Context'
import {Link} from 'react-router-dom'
import AgilewitsIntro from '../AgilewitsIntro/AgilewitsIntro'

import Option from '../Home/Options.png'

import Chat from '../Home/chat.png'

import DropDown from '../DropDown/DropDown'

import BotttomPage from '../BottomPage/BottomPage'

import CommanHeadre from '../CommonHeader/CommonHeadre'

const ApplicationForm = (props) => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const[Name,SetName]=useState("")
  const[Contact,SetContact]=useState("")
  const[Email,SetEmail]=useState("")
  const[Message,SetMessage]=useState("")
  const[Resume,SetResume]=useState(null)
  const[SetJob]=useState("")
  const form = useRef();

  const { IsActive, SetDropDownStatus,CareerJob } = useContext(Context)
  const DropDownStatus = () => {
      SetDropDownStatus()
  }
  console.log(CareerJob)

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
     
      const result = await emailjs.sendForm(
        "service_lk3gdme",
        "template_vte12xr",
        form.current,
        "PvdSsTgVVL-_miLVe"
      );

      console.log(result.text);
      setSuccessMessage("Your application has been submitted successfully!");
      SetName("")
      SetContact("")
      SetEmail("")
      SetMessage("  ")
      SetResume(null)
      alert("Your application has been submitted successfully!")
      const{history}=props
      history.push("/Jobs")
    } catch (error) {
      console.log(error.text);
      setErrorMessage("Oops! Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="ToplAYER">
        <AgilewitsIntro />

      <div className="Second">
      <img className="ChatLogo" src={Option} alt="ChatLogo" onClick={DropDownStatus} />
      <div className="SecondLayer">
        <CommanHeadre PageName="Application"/>
    <div className="job-form-container">
      <h1 className="form-heading">Job Application</h1>
      {IsActive && <DropDown />}
      <form className="job-form" onSubmit={handleSubmit} ref={form}>
        <div >
          <input type="text"
          className="form-group"
           name="name"
           placeholder="Name"
           value={Name}
           pattern="[A-Za-z]+"
           onChange={(e)=>SetName(e.target.value)}
            />
        </div>
        <div >
  <input
  className="form-group"
    type="text"
    name="Job"
    value={CareerJob} 
    onChange={(e) => SetJob(e.target.value)}
  />
</div>

        <div >
          <input type="text"
          className="form-group"
           name="contact"
           placeholder="Contact"
           pattern="[0-9]*"
           value={Contact}
           onChange={(e)=>SetContact(e.target.value)}
            />
        </div>
        <div >
          <input type="text"
           name="email"
           className="form-group"
           placeholder="Email"
           pattern=".*@.*"
           value={Email}
           onChange={(e)=>SetEmail(e.target.value)}
            />
        </div>
        <div >
          <textarea
     className="form-group"
            name="message"
            value={Message}
            onChange={(e) => SetMessage(e.target.value)}
            required
            placeholder="Message"
          ></textarea>
        </div>
        <div >
          <input type="file"
           name="resume"
           className="form-group"
           value={Resume}
           
           onChange={(e)=>SetResume(e.target.files[0])}
            />
        </div>

        <button type="submit" className="form-button">
          Submit Application
        </button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
    <BotttomPage/>
      </div>
      <Link to="/Contact" className="ChatLogo">                
                <img  src={Chat} alt="ChatLogo" />
                </Link>
      </div>
    </div>
  );
};

export default ApplicationForm;
