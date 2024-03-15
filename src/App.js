import { Component } from 'react';

import {BrowserRouter,Switch,Route,Redirect,Link}from 'react-router-dom'
import './App.css';

import Home from './Home/Home'

import AboutUs from './AboutUs/Aboutus'

import Context from './Context/Context'

import Contact from "./ContactUs/Contact"

import AppDevelopment from './AppDevelopement/AppDevelopment'

import Concen from './Concen/concen'

import Counsulting from './Counsulting/Counsulting'

import Training from './Training/Training'

import Jobs from './Jobs/Jobs'

import ApplicationForm from './ApplicationForm/Application'











class App extends Component{
state={DropDownStatus:false,CareerOpening:'ReactJS Developer'}

UpdateDropDownStatus=()=>{
  this.setState(prevState=>({DropDownStatus:!prevState.DropDownStatus}))
}
UpdateJobOpeningName=(S)=>{
this.setState({CareerOpening:S})
}
  render(){
    const{DropDownStatus,CareerOpening}=this.state
    return(
<div>
<Context.Provider value={{CareerJob:CareerOpening,IsActive:DropDownStatus,SetDropDownStatus:this.UpdateDropDownStatus,UpdateOpeningName:this.UpdateJobOpeningName}}>
       
    
   <BrowserRouter>
   <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/About" component={AboutUs}/>
    <Route exact path="/Contact" component={Contact}/>
    <Route exact path="/AppDevelopment" component={AppDevelopment}/>
    <Route exact path="/Counsulting" component={Counsulting}/>
    <Route exact path="/Concen" component={Concen}/>
    <Route exact path="/Training" component={Training}/>
    <Route exact path="/Jobs" component={Jobs}/>
    <Route exact path="/Application" component={ApplicationForm}/>
    
    <Route exact path="/NothingFound" component={()=><div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}><h1>Nothing Found</h1><Link to="/"><button>Home</button></Link></div>}/>
    <Redirect to="/NothingFound"/>

    </Switch>
    </BrowserRouter>
    </Context.Provider>
    </div>

    )
  }
}

export default App;