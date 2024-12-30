import React from "react";
import Overview from "./Overview";
import StudyStatistics from "./StudyStatistics";
import Progress from "./Progress";
import MyCourses from "./MyCourses";
import LiveEvents from "./LiveEvents";
import Activity from "./Activity";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <main className="dashboard">
      <h1>Dashboard</h1>
      <div className="dashboard-content">
        <Overview />
        <LiveEvents />
      </div>
    </main>
  );
};

export default Dashboard;
