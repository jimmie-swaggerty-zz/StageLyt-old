import React, { useState } from "react";
const EventForm = (props) => {
  const {
    initialName,    initialShowStart,    initialShowEnd,    initialEventDescript,    initialTicketInfo,    initialAccessURL,    buttonText,    onSubmitProp,    errors
  } = props;
  
  console.log(initialName);

  const [eventName, setEventName] = useState(initialName);
  const [showStart, setShowStart] = useState(initialShowStart);
  const [showEnd, setShowEnd] = useState(initialShowEnd);
  const [eventDescript, setEventDescript] = useState(initialEventDescript);
  const [ticketInfo, setTicketInfo] = useState(initialTicketInfo);
  const [accessURL, setAccessURL] = useState(initialAccessURL);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmitProp({
      name: eventName, showStart, showEnd, eventDescript, ticketInfo, accessURL
    });
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div className="input">
            <label>name: </label>
            <input
              type="text"
              name="eventName"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
            />
            {errors.name ? (<p className="error">{errors.name.message}</p>) : null}
          </div>
          <div className="input">
            <label>showStart: </label>
            <input
              type="datetime-local"
              name="showStart"
              value={showStart}
              onChange={(e) => setShowStart(e.target.value)}
            />
            {errors.showStart ? (
              <p className="error">{errors.showStart.message}</p>
            ) : null}
          </div>
          <div className="input">
            <label>showEnd: </label>
            <input
              type="datetime-local"
              name="showEnd"
              value={showEnd}
              onChange={(e) => setShowEnd(e.target.value)}
            />
            {errors.showEnd ? (
              <p className="error">{errors.showEnd.message}</p>
            ) : null}
          </div>
          <div className="input">
            <label>eventDescript: </label>
            <input
              type="text"
              name="eventDescript"
              value={eventDescript}
              onChange={(e) => setEventDescript(e.target.value)}
            />
            {errors.eventDescript ? (
              <p className="error">{errors.eventDescript.message}</p>
            ) : null}
          </div>
          <div className="input">
            <label>ticketInfo: </label>
            <input
              type="text"
              name="ticketInfo"
              value={ticketInfo}
              onChange={(e) => setTicketInfo(e.target.value)}
            />
            {errors.ticketInfo ? (
              <p className="error">{errors.ticketInfo.message}</p>
            ) : null}
          </div>
          <div className="input">
            <label>accessURL: </label>
            <input
              type="url"
              name="accessURL"
              value={accessURL}
              onChange={(e) => setAccessURL(e.target.value)}
            />
            {errors.accessURL ? (
              <p className="error">{errors.accessURL.message}</p>
            ) : null}
          </div>
          <label></label>
          <input type="submit" value={buttonText} className="btn btn-light btn-outline-primary"/>
          </div>  
          </div>
        <div className="row">

        </div>
      </div>
    </form>
  );
};
export default EventForm;
