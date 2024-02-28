import { Component } from 'react';

import {BrowserRouter,Switch,Route,Redirect,Link}from 'react-router-dom'
import './App.css';

import Home from './Home/Home'

import Context from './Context/Context'









class App extends Component{
state={DropDownStatus:false}

UpdateDropDownStatus=()=>{
  this.setState(prevState=>({DropDownStatus:!prevState.DropDownStatus}))
}
  render(){
    const{DropDownStatus}=this.state
    return(
<div>
<Context.Provider value={{IsActive:DropDownStatus,SetDropDownStatus:this.UpdateDropDownStatus}}>
       
    
   <BrowserRouter>
   <Switch>
    <Route exact path="/" component={Home}/>
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