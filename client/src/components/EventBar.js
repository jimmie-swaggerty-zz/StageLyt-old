import { navigate, Link } from '@reach/router';
import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Moment from 'moment'

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
        <>
            <h2>Upcoming Events</h2>
            <div className="eventBar">
                <button onClick={scrollLeft} className="scrollButton" style={leftStyle}>&lt;</button>
                    {events.length > 0 && events.slice(startIndex,endIndex).map((event, idx)=>{
                        const tileStyle = {
                            backgroundImage: 'url('+event.imageURL+')',   backgroundSize: 'contain',  backgroundPosition: 'center'
                        }
                        return <div className="eventTile" key={idx}>
                            <div className="eventTileImage" style={tileStyle} onClick={e=> {e.preventDefault();navigate('./events/'+event._id)}}>
                            </div>
                            <h4 className="eventTitle">{event.name}</h4> 
                            <hr/>
                            <p>{Moment(event.showStart).format('LLLL')}
                            <br/>to
                            <br/>{Moment(event.showEnd).format('LLLL')}</p>
                            <hr/>
                            <p className="eventDate">{event.eventDescript}</p>
                            <p><a href={event.accessURL} target="_blank"><button className="btn btn-light me-2 btn-outline-primary">Buy Tickets</button></a> <Link to={'/events/'+event._id}><button className="btn btn-light me-2 btn-outline-primary">More Info</button></Link></p>
                        </div>
                    })}
                <button onClick={scrollRight} className="scrollButton" style={rightStyle}>&gt;</button>
            </div>
        </>
    )
}
export default EventBar;