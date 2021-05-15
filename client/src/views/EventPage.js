import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Moment from 'moment'
import { navigate } from '@reach/router';

const EventPage = (props) => {
    
    const { id } = props;
    
    const [event, setEvent] = useState([]);
    const [loaded, setLoaded]= useState([false])

    useEffect(() => {
        axios.get('http://localhost:8000/api/event/'+id)
            .then(res => {
                setEvent(res.data);
                setLoaded(true)
            })
            .catch(
                console.log("Could not pull api")
            )
    }, [id])

    const tileStyle = {
        backgroundImage: 'url('+event.imageURL+')',   backgroundSize: 'cover',  backgroundPosition: 'center', width: '400px', height: '225px'
      }
    return (
        <div>
            {loaded && <div className="eventHeader">
                <h1>{event.name}</h1>
                <h2>{Moment(event.showStart).format('LLLL')} to {Moment(event.showEnd).format('LLLL')}</h2>
                <div className="eventBanner" style={tileStyle}></div>
                <hr/>
                <div className="ticketInfo">
                    <h2>Ticket Info here:</h2>
                    <p>{event.ticketInfo}</p>
                </div>
                <div className="eventinfo">
                    <h2>Event Info Here</h2>
                    <p>{event.eventDescript}</p>
                </div>
                <a href={event.accessURL} target="_blank"><button className="btn btn-light me-2 btn-outline-primary">Buy Tickets</button></a>
            </div>}
        </div>
    )
}
export default EventPage;