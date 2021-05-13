import React, { useState, useEffect } from 'react'
import axios from 'axios';
import EventForm from '../components/EventForm';
import {navigate} from '@reach/router'

const Update = (props) => {
    
    const { id } = props;
    
    const [currentEvent, setCurrentEvent] = useState([]);
    const [errors, setErrors] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/api/event/'+id)
            .then(res => {
                setCurrentEvent(res.data);
                setLoaded(true)
            })
            .catch(
                console.log("Could not pull api")
            )
    }, [id])

    const updateEvent = (currentEvent) => {
        axios.put('http://localhost:8000/api/event/' + id, currentEvent)
            .then(res => {
                console.log(res);
                navigate ('/home')
            })
            .catch(err=>{
                setErrors(err.response.data.errors);
            })
    }

    return (
        <div>
            <div className="col">
                    <h2>Event Update: {currentEvent.name}</h2>
            </div>
                {loaded &&
                    <EventForm
                    initialName={currentEvent.name}
                    initialShowStart={currentEvent.showStart}
                    initialShowEnd={currentEvent.showEnd}
                    initialEventDescript={currentEvent.eventDescript}
                    initialTicketInfo={currentEvent.ticketInfo}
                    initialAccessURL={currentEvent.accessURL}
                    buttonText="Update Event"
                    onSubmitProp={updateEvent}
                    errors={errors}
                />}
        </div>
    )
}
export default Update;