import React from 'react';
import { Router } from '@reach/router';
import './App.css';
import Main from './views/Main'
import Gather from './views/Gather'
import New from './views/New'
import NavBar from './components/NavBar';
import Update from './views/Update'
import EventPage from './views/EventPage'
import LogReg from './views/LogReg'

function App() {
  return (
    <div className="App">
      <div className="container-flex">
        <NavBar button="Login" link="/login"/>
      </div>
      <Router>
        <Main pather="/home" default/>
        <Gather path="/gather"/>
        <New path="/events/new"/>
        <Update path="/events/update/:id"/>
        <EventPage path="/events/:id"/>
        <LogReg path="/login"/>
      </Router>
    </div>
  );
}
export default App;