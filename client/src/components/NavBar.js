import { navigate, Link } from '@reach/router';
import React from 'react'
import icontemp from '../images/icontemp.png'
import axios from "axios";
import { useState } from 'react/cjs/react.development';

const NavBar = (props) => {

    const {status, updateStatus} = props;
    const [currentStatus, setCurrentStatus] = useState(status)

    const Logout = (e) => {
        axios.post("http://localhost:8000/api/user/logout")
        updateStatus(currentStatus)
        setCurrentStatus("logged-out")
        navigate('./login')
    }

    return (
    <nav className="navbar navbar-dark bg-primary">
        <div className="container-fluid">
            <Link className="navbar-brand" to="../home">
                <img src={icontemp} alt="" width="30" height="24"/>
                StageLyte
            </Link>
                {status==="logged-in" &&
                <form className="d-flex">
                    <button className="btn btn-light me-2 btn-outline-primary" type="button" onClick={e=>{e.preventDefault(); navigate('../events/new')}}>New Event</button>
                    <button className="btn btn-light me-2 btn-outline-primary" type="button" onClick={e=>{e.preventDefault(); Logout()}}>Logout</button>
                </form>
                }
                {status==="logged-out" &&
                    <button className="btn btn-light me-2 btn-outline-primary" type="button" onClick={
                        e=>{e.preventDefault(); navigate('/login');}}>
                        Log In
                    </button>
                }
        </div>
    </nav>
    )
}
export default NavBar;