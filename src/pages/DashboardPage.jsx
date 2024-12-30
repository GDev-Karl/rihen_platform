import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Dashboard from "../components/Dashboard/Dashboard";

const DashboardPage = () => {
  return (
    <div className="dashboard-page">
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default DashboardPage;
