import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Avatar,
} from "@mui/material";
import {
  Home,
  Event,
  AccountTree,
  CheckCircle,
  Help,
  School,
  Description,
  Forum,
  Dns,
  Code,
} from "@mui/icons-material";

const Sidebar = ({ showText, onMenuSelect }) => {
  const iconStyle = { fontSize: 30 };
  const [selectedMenu, setSelectedMenu] = useState("Home"); // state for the selected menu

  const handleMenuClick = (menuText) => {
    setSelectedMenu(menuText);
    onMenuSelect(menuText); // Notifies the parent of the selected menu
  };

  const menuItems = [
    { text: "Home", icon: <Home style={iconStyle} /> },
    { text: "My Planning", icon: <Event style={iconStyle} /> },
    { text: "Projects", icon: <AccountTree style={iconStyle} /> },
    { text: "QA Reviews I can make", icon: <CheckCircle style={iconStyle} /> },
    { text: "Evaluation quizzes", icon: <Help style={iconStyle} /> },
  ];
  const secondaryMenuItems = [
    { text: "Curriculums", icon: <School style={iconStyle} /> },
    { text: "Concepts", icon: <Description style={iconStyle} /> },
    { text: "Conference rooms", icon: <Forum style={iconStyle} /> },
    { text: "Servers", icon: <Dns style={iconStyle} /> },
    { text: "Sandboxes", icon: <Code style={iconStyle} /> },
  ];

  return (
    <Box
      sx={{
        width: showText ? 250 : 60,
        height: "100vh",
        bgcolor: "#f4f4f4",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "width 0.3s",
      }}
    >
      {/* Menu Items */}
      <List>
        {menuItems.map((item, index) => (
          <ListItem
            button
            key={index}
            onClick={() => handleMenuClick(item.text)}
            sx={{
              color: selectedMenu === item.text ? "red" : "inherit",
            }}
          >
            <ListItemIcon
              sx={{
                color: selectedMenu === item.text ? "red" : "inherit",
              }}
            >
              {item.icon}
            </ListItemIcon>
            {showText && <ListItemText primary={item.text} />}
          </ListItem>
        ))}
        <Divider />
        {secondaryMenuItems.map((item, index) => (
          <ListItem
            button
            key={index + menuItems.length}
            onClick={() => handleMenuClick(item.text)}
            sx={{
              color: selectedMenu === item.text ? "red" : "inherit",
            }}
          >
            <ListItemIcon
              sx={{
                color: selectedMenu === item.text ? "red" : "inherit",
              }}
            >
              {item.icon}
            </ListItemIcon>
            {showText && <ListItemText primary={item.text} />}
          </ListItem>
        ))}
      </List>

      {/* Profile Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 2,
        }}
      >
        <Avatar src="/assets/images/profile/MainLogo.png" alt="Profile" />
        {showText && <ListItemText primary="My Profile" />}
      </Box>
    </Box>
  );
};

export default Sidebar;
