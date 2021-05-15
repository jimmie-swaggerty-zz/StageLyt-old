import React, {useState} from 'react';
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
  const [status, setStatus] = useState("logged-out")

  const updateStatus=(status)=>{
    setStatus(status)
  }

  return (
    <div className="App">
      <div className="container-flex">
        <NavBar status={status} updateStatus={updateStatus}/>
      </div>
      <Router>
        <Main pather="/home" status={status} updateStatus={updateStatus} default/>
        <Gather path="/gather"/>
        <New path="/events/new"/>
        <Update path="/events/update/:id"/>
        <EventPage path="/events/:id"/>
        <LogReg path="/login" updateStatus={updateStatus}/>
      </Router>
    </div>
  );
}
export default App;