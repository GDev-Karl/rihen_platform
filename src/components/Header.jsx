import React from "react";
import { AppBar, Toolbar, Typography, Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Header = ({ toggleSidebar }) => (
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
    </Toolbar>
  </AppBar>
);

export default Header;
