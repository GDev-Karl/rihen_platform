import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Box, Grid2 } from "@mui/material";
import Header from "./components/StaticComponents/Header";
import Sidebar from "./components/StaticComponents/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import Average from "./components/StaticComponents/Average";
import Plannning from "./components/Planning/Planning";
import Project from "./components/Project/Project";
import CursusModules from "./components/Project/CursusModules";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeView, setActiveView] = useState("Home");

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleMenuSelect = (menuText) => {
    setActiveView(menuText); // Change the active view base on the menu selected
  };

  return (
    <Router>
      <Grid2 container spacing={2}>
        <Grid2 size={12}>
          <Header toggleSidebar={toggleSidebar} notificationsCount={2}/>
        </Grid2>
        <Box sx={{ display: "flex", height: "100vh" }}>
          {/* Sidebar */}
          <Sidebar showText={isSidebarOpen} onMenuSelect={handleMenuSelect}/>

          {/* Main Content */}
          <Box
            sx={{
              flexGrow: 1,
              transition: "margin-left 0.3s",
              ml: "10px", // Ajuste la marge selon l'état de la barre latérale
              p: 2,
              overflow: "auto",
            }}
          >
            <Box sx={{ mt: 2 }}>
              <Average />
              {/* Contenu dynamique */}

              {activeView === "Home" && <Dashboard />}
              {activeView === "My Planning" && <Plannning />}
              {/* Ajoutez ici les composants pour les autres vues */}
              {activeView === "Projects" && <CursusModules />}
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
    </Router>
  );
}

export default App;
