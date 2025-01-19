import React from "react";
import Image from "next/image";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  InputBase,
  Badge,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import SearchIcon from "@mui/icons-material/Search";

const Header = ({ toggleSidebar, notificationsCount }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // Responsive

  return (
    <AppBar position="static" sx={{ bgcolor: "#fff", boxShadow: "none" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between", // Répartition uniforme
          alignItems: "center",
          width: "100%",
          padding: isSmallScreen ? "8px" : "16px",
        }}
      >
        {/* Logo et Hamburger */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flex: isSmallScreen ? "1" : "0.2", // Largeur adaptable
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            onClick={toggleSidebar}
            sx={{ marginRight: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Image
            alt="Rihen Logo"
            src="/assets/images/Rihen.png"
            width={40}
            height={40}
            style={{ marginRight: "10px" }}
          />
          <Typography
            variant="h6"
            sx={{
              color: "#000",
              whiteSpace: "nowrap",
              fontSize: isSmallScreen ? "16px" : "20px",
            }}
          >
            Rihen Dashboard
          </Typography>
        </Box>

        {/* Barre de recherche */}
        {!isSmallScreen && (
          <Box
            sx={{
              flex: "3", // Place la barre de recherche au centre
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                bgcolor: "#f1f1f1",
                borderRadius: "8px",
                padding: "2px 8px",
                maxWidth: "400px",
                width: "100%",
              }}
            >
              <InputBase
                placeholder="Search"
                sx={{
                  width: "100%",
                  marginRight: "8px",
                }}
              />
              <SearchIcon sx={{ color: "#888" }} />
            </Box>
          </Box>
        )}

        {/* Notifications + Paramètres */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            flex: isSmallScreen ? "1" : "0.2",
            gap: "16px", // Espace entre les icônes
          }}
        >
          <IconButton color="inherit">
            <Badge
              badgeContent={notificationsCount > 0 ? notificationsCount : null}
              color="error"
            >
              <NotificationsIcon
                sx={{ color: "#000", width: "30px", height: "30px" }}
              />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <SettingsIcon sx={{ color: "#000", width: "30px", height: "30px" }} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
