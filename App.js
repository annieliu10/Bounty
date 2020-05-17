import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Shopping from "./Shopping";
import Contact from "./Contact";
import Location from "./Location";
import Registration from "./Registration";
import history from "./history";


// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// https://swapi.co/
class App extends React.Component {
    
    handleClick() {
        return 
    }
    
    
    
    constructor() {
        super()
        this.state={
            
        }
    }
    
    
    render(){
       
        
        return      <HashRouter> 
            
       
       <div>
        <ul className="header">
           <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/registration">Registration</NavLink></li>
                     <li><NavLink to="/location">Location</NavLink></li>
                     <li><NavLink to="/shopping">Shopping</NavLink></li>
                          <li><NavLink to="/contact">Contact Us</NavLink></li>
          </ul>
        
        
        <Route exact path="/" component={Home}/>
         <Route path="/registration" component={Registration}/>
             <Route path="/location" component={Location}/>
             <Route path="/shopping" component={Shopping}/>
                  <Route path="/contact" component={Contact}/>
        
            
        
             
        
        
        
        
    </div>
           </HashRouter>
        /* 
        <Router history={history>
          <Switch>
    <Route path="/registration" exact strict render={
        () => {
        return <h1>Registration</h1>
     }}
        />

    <Route path="/about" exact strict render={
        () => {
        return <h1>About</h1>
     }}
        />

<Route path="/user/:username" exact strict component={User}
     
        />
    <button class="button" onClick={this.handleClick}>Login</button>

    
    </Switch>
        </Router>
 
        */
   
}    
    
}
  


export default App
