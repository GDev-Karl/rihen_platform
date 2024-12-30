import React from "react";
import "./StudyStatistics.css";

const StudyStatistics = () => {
  const data = [2, 4, 3, 5, 7, 6, 4]; // Données simulées (par jour)

  return (
    <section className="study-statistics">
      <h2>Study Statistics</h2>
      <div className="chart">
        {data.map((value, index) => (
          <div
            key={index}
            className="bar"
            style={{ height: `${value * 10}px` }}
          >
            <span>{value}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StudyStatistics;
