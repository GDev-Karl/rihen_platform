import React from "react";
import "./LiveEvents.css";

const LiveEvents = () => {
  const events = [
    {
      title: "Lorem ipsum event title",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      status: "Live",
    },
  ];

  return (
    <section className="live-events">
      <h2>Live Events</h2>
      <div className="event-list">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <span className="status">{event.status}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LiveEvents;
