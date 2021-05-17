import React from 'react';
import EventBar from '../components/EventBar'
import MyEvents from '../components/MyEvents'

const Main = (props) => {
    const {status} = props
    return (
        <div>
            {status==="logged-out"&&
            <>
                <h2>Welcome</h2>
                <p>Welcome to StageLyt! Please login in order to add your own events, or purchase tickets to one of our many events listed below!</p>
            </>}
            <EventBar/>
            {status==="logged-in" &&
            <div>
            <MyEvents/>
            </div>
            }
        </div>
    )
}
export default Main;
