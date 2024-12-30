import React from "react";
import "./Progress.css";

const Progress = () => {
  const progress = {
    courses: 45,
    prototypes: 80,
  };

  return (
    <section className="progress">
      <h2>Progress</h2>
      <div className="progress-circle">
        <div className="circle">
          <div className="inner-circle">
            <span>{progress.courses}%</span>
          </div>
        </div>
        <p>Courses</p>
      </div>
      <div className="progress-circle">
        <div className="circle">
          <div className="inner-circle">
            <span>{progress.prototypes}%</span>
          </div>
        </div>
        <p>Prototypes</p>
      </div>
    </section>
  );
};

export default Progress;
