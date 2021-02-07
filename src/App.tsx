import React, {useEffect, useState} from 'react';
import './App.css';
import {Club} from './components/Club'
import {NavBar} from './components/NavBar'
import { MDBListGroup, MDBContainer } from "mdbreact";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {ClubPage} from './components/ClubPage'
import {ClubList} from './components/ClubList'



function App() {

  
  return ( 
    
      <Router>
      <Switch>
        <Route exact path="/" component={ClubList} />
        <Route exact path="/detailsview/:clubIndex" component={ClubPage} />
     <div>
            
             
  <MDBListGroup >
   < ClubList />
 
  </MDBListGroup>
             
             
            
           </div>
           </Switch>
    </Router>
    
   
           
    
  )
}

export default App;
