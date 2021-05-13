import { navigate } from '@reach/router';
import React, {useState, useEffect} from 'react'
import DeleteButton from './DeleteButton'
import axios from 'axios';

const EventBar = (props) => {
    const [startIndex, setStartIndex] = useState(0)
    const [endIndex, setEndIndex] = useState(3)
   const [events, setEvents] = useState([])
    //establish altering style
    const active = {
        color: 'white',
    }
    const inactive = {
        color: 'black',
    }

    useEffect(()=>{
        axios.get('http://localhost:8000/api/events')
            .then(res=>{
                setEvents(res.data);

            });
    },[events])

    //establish style states
    const [leftStyle, setLeftStyle] =useState(inactive)
    const [rightStyle, setRightStyle] = useState(active)

    const scrollLeft =()=> {
        if(startIndex>0){
            setLeftStyle(active)
            setStartIndex(startIndex-1)
            setEndIndex(endIndex-1)
            setRightStyle(active)
        }
        else{
            setLeftStyle(inactive)
        }
    }
    const scrollRight =()=> {
        if(endIndex<=events.length-1){
            setStartIndex(startIndex+1)
            setEndIndex(endIndex+1)
            setRightStyle(active)
            setLeftStyle(active)
        }
        else{
            setRightStyle(inactive)
        }
    }
    return (
        <div className="eventBar">
            <button onClick={scrollLeft} className="scrollButton" style={leftStyle}>&lt;</button>
                {events.length > 0 && events.slice(startIndex,endIndex).map((event, idx)=>{
                    return <div className="eventTile" key={idx}>
                        <div className="eventTileImage" onClick={e=> {e.preventDefault();navigate('./events/'+event._id)}}>
                        </div>
                        <p className="eventTitle">{event.name}</p> 
                        <p>{event._id}</p>
                        <p className="eventDate">{event.eventDescript}</p>
                        <button className="btn btn-light me-2 btn-outline-primary" type="button" onClick={e=>{e.preventDefault(); navigate('/events/update/'+event._id)}}>Update</button>
                        <DeleteButton id={event._id}/>
                    </div>
                })}
            <button onClick={scrollRight} className="scrollButton" style={rightStyle}>&gt;</button>
        </div>
    )
}
export default EventBar;