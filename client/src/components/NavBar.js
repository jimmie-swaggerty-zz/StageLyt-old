import { navigate, Link } from '@reach/router';
import React from 'react'
import icontemp from '../images/icontemp.png'

const NavBar = (props) => {

    const {button, link} = props;

    return (
    <nav className="navbar navbar-dark bg-primary">
        <div className="container-fluid">
            <Link className="navbar-brand" to="../home">
                <img src={icontemp} alt="" width="30" height="24"/>
                StageLyte
            </Link>
                {/* <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="" aria-label="Search"/>
                    <button className="btn btn-light btn-outline-primary" type="submit">Search</button>
                </form> */}
                <form className="d-flex">
                    <button className="btn btn-light me-2 btn-outline-primary" type="button" onClick={e=>{e.preventDefault(); navigate('../events/new')}}>New Event</button>
                    <button className="btn btn-light me-2 btn-outline-primary" type="button" onClick={e=>{e.preventDefault(); navigate(link)}}>{button}</button>
                </form>
        </div>
    </nav>
    )
}
export default NavBar;