import React from 'react'
import {navigate} from '@reach/router'
import axios from 'axios';
const DeleteButton = (props) => {
    const {id} = props;
    const deleteEvent = e => {
        axios.delete('http://localhost:8000/api/events/'+id)
            .then(res=>{
                console.log(id);
                navigate ('http://localhost:3000/events')
            })
    }
    return (
        <button id="delete-button" onClick={(e)=> deleteEvent()} className="btn btn-light btn-outline-primary">
            Delete
        </button>
    )
}
export default DeleteButton;