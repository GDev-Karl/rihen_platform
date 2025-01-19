import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  InputBase,
  Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import SearchIcon from "@mui/icons-material/Search";

const Header = ({ toggleSidebar, notificationsCount }) => (
  <AppBar position="static" sx={{ bgcolor: "#ffff" }}>
    <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
      {/* Logo et Hamburger */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton
          edge="start"
          color="#000"
          onClick={toggleSidebar}
          sx={{ marginRight: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <img
          alt="Rihen Logo"
          src="../assets/images/Rihen.png"
          style={{ height: "50px", marginRight: "10px" }}
        />
        <Typography variant="h6" sx={{ color: "#000" }}>
          Rihen Dashboard
        </Typography>
      </Box>

      {/* Notifications et paramètres */}
      <Box sx={{ display: "flex", alignItems: "center" }}>

        {/* Barre de recherche */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            bgcolor: "#f1f1f1",
            borderRadius: "8px",
            padding: "2px 8px",
            width: "400px",
          }}
        >
          <InputBase placeholder="Search" sx={{ width: "100%" }} />
          <SearchIcon sx={{ color: "#888", marginRight: 1 }} />
        </Box>

        {/* Notifications*/}
        <IconButton color="inherit">
          <Badge
            badgeContent={notificationsCount > 0 ? notificationsCount : null}
            color="error"
          >
            <NotificationsIcon sx={{ color: "#000", width:"35px", height: "35px"}} />
          </Badge>
        </IconButton>

        {/* Paramètres */}
        <IconButton color="inherit">
          <SettingsIcon sx={{ color: "#000", width:"35px", height: "35px"}} />
        </IconButton>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Header;
