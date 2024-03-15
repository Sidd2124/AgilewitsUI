import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import "./JobApplicationForm.css";

const ApplicationForm = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const[Name,SetName]=useState("")
  const[Contact,SetContact]=useState("")
  const[Email,SetEmail]=useState("")
  const[Message,SetMessage]=useState("")
  const[Resume,SetResume]=useState(null)
  const form = useRef();

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
    } catch (error) {
      console.log(error.text);
      setErrorMessage("Oops! Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="job-form-container">
      <h1 className="form-heading">Job Application Form</h1>
      <form className="job-form" onSubmit={handleSubmit} ref={form}>
        <div className="form-group">
          <input type="text"
           name="name"
           placeholder="Name"
           value={Name}
           pattern="[A-Za-z]+"
           onChange={(e)=>SetName(e.target.value)}
            />
        </div>
        <div className="form-group">
          <input type="text"
           name="contact"
           placeholder="Contact"
           pattern="[0-9]*"
           value={Contact}
           onChange={(e)=>SetContact(e.target.value)}
            />
        </div>
        <div className="form-group">
          <input type="text"
           name="email"
           placeholder="Email"
           pattern=".*@.*"
           value={Email}
           onChange={(e)=>SetEmail(e.target.value)}
            />
        </div>
        <div className="form-group">
          <textarea
     
            name="message"
            value={Message}
            onChange={(e) => SetMessage(e.target.value)}
            required
            placeholder="Message"
          ></textarea>
        </div>
        <div className="form-group">
          <input type="file"
           name="resume"
           
           
           
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
  );
};

export default ApplicationForm;
