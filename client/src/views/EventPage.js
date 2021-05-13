import React, { useState, useEffect } from 'react'
import axios from 'axios';

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

    return (
        <div>
            {loaded && <div className="eventHeader">
                <h1>{event.name}</h1>
                <h2>{event.showStart}</h2>
                <div className="eventBanner"></div>
                <div className="ticketInfo">
                    <p>Ticket Info here:</p>
                    <p>{event.ticketInfo}</p>
                </div>
            </div>}
        </div>
    )
}
export default EventPage;