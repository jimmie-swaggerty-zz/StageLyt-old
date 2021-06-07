import React, { useState, useEffect } from 'react';
var axios = require('axios');

const Gather = () => {
    const [guests, setGuests] = useState([]);
    const [loaded, setLoaded] = useState(false); 
    useEffect(()=>{
        axios.get('https://gather.town/api/getEmailGuestList?spaceId=F9MEWP9vPdtZ2Fcb\\newportvirtualvenue',
        {
            headers:{
                'Access-Control-Allow-Origin':'*',
                'crossorigin':true,
                "Content-type":'application/x-www-form-urlencoded',
                'CORS_DEBUG':1,
            },
            params: {
                'apiKey':'QeNrVe1dlWfZMpqk',
            }
        })
            .then(res=>{
                setGuests(res.data);
                setLoaded(true);
            });
    },[])
    return (
        <div>
                    <h2>Gather Page</h2>
                    {loaded && guests.map((guest, idx)=>{
                    return <div>
                        <h1>Guests</h1>
                        <p>{guest}</p>
                        </div>
                })}
        </div>
    )
}
export default Gather;
