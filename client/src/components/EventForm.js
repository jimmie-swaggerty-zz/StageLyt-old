import React, { useState } from "react";
const EventForm = (props) => {
  const {
    initialName,
    initialShowStart,
    initialShowEnd,
    initialEventDescript,
    initialTicketInfo,
    initialHeroImage,
    initialHeroVideo,
    initialAccessURL,
    initialPublished,
    buttonText,
    onSubmitProp,
    page,
    errors
  } = props;

  const [name, setName] = useState(initialName);
  const [showStart, setShowStart] = useState(initialShowStart);
  const [showEnd, setShowEnd] = useState(initialShowEnd);
  const [eventDescript, setEventDescript] = useState(initialEventDescript);
  const [ticketInfo, setTicketInfo] = useState(initialTicketInfo);
  const [heroImage, setHeroImage] = useState(initialHeroImage);
  const [heroVideo, setHeroVideo] = useState(initialHeroVideo);
  const [accessURL, setAccessURL] = useState(initialAccessURL);
  const [published, setPublished] = useState(initialPublished);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmitProp({
      name, showStart, showEnd, eventDescript, ticketInfo, heroImage, heroVideo, accessURL, published
    });
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="input">
        <label>name: </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name ? <p className="error">{errors.name.message}</p> : null}
      </div>
      <div className="input">
        <label>showStart: </label>
        <input
          type="date"
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
          type="date"
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
        <label>heroImage: </label>
        <input
          type="string"
          name="heroImage"
          value={heroImage}
          onChange={(e) => setHeroImage(e.target.value)}
        />
        {errors.heroImage ? (
          <p className="error">{errors.heroImage.message}</p>
        ) : null}
      </div>
      <div className="input">
        <label>heroVideo: </label>
        <input
          type="text"
          name="heroVideo"
          value={heroVideo}
          onChange={(e) => setHeroVideo(e.target.value)}
        />
        {errors.heroVideo ? (
          <p className="error">{errors.heroVideo.message}</p>
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
      {page==="update" && <div className="input">
        <label>published: </label>
        <input
          type="checkbox"
          name="published"
          value={published}
          onChange={(e) => setPublished(e.target.value)}
        />
        {errors.published ? (
          <p className="error">{errors.published.message}</p>
        ) : null}
      </div>}
      <input type="submit" value={buttonText} />
    </form>
  );
};
export default EventForm;
