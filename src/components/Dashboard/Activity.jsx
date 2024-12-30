import React from "react";
import "./Activity.css";

const Activity = () => {
  const activities = [
    {
      user: "Felix",
      action: "replied on",
      content: "At aliquam enim in cras arcu",
      timestamp: "25th Sep, 11:00 am",
    },
    {
      user: "Ludwig",
      action: "invited you to",
      content: "Imperdiet enim est, varius faucibus.",
      timestamp: "25th Sep, 10:00 am",
    },
    {
      user: "Jonathan",
      action: "commented on",
      content: "Venenatis aliquam et pellentesque...",
      timestamp: "24th Sep, 4:00 pm",
    },
  ];

  return (
    <section className="activity">
      <h2>Activity</h2>
      <div className="activity-list">
        {activities.map((activity, index) => (
          <div className="activity-item" key={index}>
            <p>
              <strong>{activity.user}</strong> {activity.action}{" "}
              <em>{activity.content}</em>
            </p>
            <span>{activity.timestamp}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Activity;
