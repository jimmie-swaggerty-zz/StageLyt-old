import React, { useState } from 'react'
import axios from 'axios';
import EventForm from '../components/EventForm';
import {navigate} from '@reach/router'

const New = (props) => {
    
    const [errors, setErrors] = useState([])
    const [authError, setAuthError] = useState("")


    const createEvent = (event) => {
        axios.post('http://localhost:8000/api/events', event, {withCredentials:true})
            .then(res=>{
                console.log(res.data);
                navigate ('../')
            })
            .catch(err=>{
                if (err.response.status===401){
                    setAuthError("Please sign in to continue")
                }
                else{
                    setErrors(err.response.data.errors);
                }
            })
    }

    return (
        <div>
            <div className="col">
                    <h2>Add new event</h2>
            </div>
                {authError && <p>{authError}</p>}
                <EventForm
                    initialName=""
                    initialShowStart= ""
                    initialShowEnd= ""
                    initialEventDescript=""
                    initialTicketInfo=""
                    initialAccessURL=""
                    buttonText="Add Event"
                    onSubmitProp={createEvent}
                    errors={errors}
                />
        </div>
    )
}
export default New;