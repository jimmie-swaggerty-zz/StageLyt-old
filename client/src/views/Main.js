import React from 'react';
import EventBar from '../components/EventBar'
import Login from '../components/Login'
import New from '../views/New'
import MyEvents from '../components/MyEvents'

const Main = (props) => {
    const {status, updateStatus} = props
    return (
        <div>
            <EventBar/>
            {status==="logged-in" &&
            <div>
            <MyEvents/>
            </div>
            }
            {status==="logged-out"&&
            <div className="loginbox">
                <Login updateStatus={updateStatus} />
            </div>
            }
        </div>
    )
}
export default Main;
