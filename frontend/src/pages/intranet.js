import React, { useState } from "react";
import { Box, Grid2 } from "@mui/material";
import Header from "../components/StaticComponents/Header";
import Sidebar from "../components/StaticComponents/Sidebar";
import Dashboard from "../components/Dashboard/Dashboard";
import Average from "../components/StaticComponents/Average";
import Planning from "../components/Planning/Planning";
import Project from "../components/Project/Project";

export default function intranetPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeView, setActiveView] = useState("Home");

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleMenuSelect = (menuText) => {
    setActiveView(menuText); // Change the active view based on the menu selected
  };

  return (
    <Grid2 container spacing={2}>
      <Grid2 item xs={12}>
        <Header toggleSidebar={toggleSidebar} notificationsCount={2} />
      </Grid2>
      <Box sx={{ display: "flex", height: "100vh" }}>
        {/* Sidebar */}
        <Sidebar showText={isSidebarOpen} onMenuSelect={handleMenuSelect} />

        {/* Main Content */}
        <Box
          sx={{
            flexGrow: 1,
            transition: "margin-left 0.3s",
            ml: "10px",
            p: 2,
            overflow: "auto",
          }}
        >
          <Box sx={{ mt: 2 }}>
            <Average />
            {/* Dynamic Content */}
            {activeView === "Home" && <Dashboard />}
            {activeView === "My Planning" && <Planning />}
            {activeView === "Projects" && <Project />}
            {activeView === "QA Reviews I can make" && (
              <div>QA Reviews Component</div>
            )}
            {activeView === "Evaluation quizzes" && (
              <div>Evaluation Quizzes Component</div>
            )}
          </Box>
        </Box>
      </Box>
    </Grid2>
  );
}
