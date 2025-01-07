import React from "react";
import { Box, Typography, Grid2 } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import ArticleIcon from "@mui/icons-material/Article";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const OverviewCard = ({ icon, title, value }) => (
  <Grid2
    item
    //xs={12} //width for small screens
    //sm={6} //width for medium screens
    //md={3} //width for large screens
    sx={{
      //style
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "space-between",
      border: "1px solid #E0E0E0",
      borderRadius: "8px",
      padding: "16px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    }}
  >
    <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <Box>{icon}</Box>
      <Typography variant="subtitle1" sx={{ color: "#5F6368" }}>
        {title}
      </Typography>
    </Box>
    <Typography
      variant="h4"
      sx={{
        marginTop: "16px",
        fontWeight: "bold",
        color: "#333",
        alignSelf: "center",
      }}
    >
      {value}
    </Typography>
  </Grid2>
);

const Overview = () => {
  // Cards data
  const data = [
    {
      icon: <SchoolIcon style={{ color: "#1DA1F2" }} />,
      title: "Courses in progress",
      value: "3",
    },
    {
      icon: <ArticleIcon style={{ color: "#1DA1F2" }} />,
      title: "Active Prototypes",
      value: "7",
    },
    {
      icon: <AccessTimeIcon style={{ color: "#1DA1F2" }} />,
      title: "Hours Learning",
      value: "3h 15m",
    },
    {
      icon: <EmojiEventsIcon style={{ color: "#1DA1F2" }} />,
      title: "Community score",
      value: "240",
    },
  ];

  return (
    <Box sx={{ width: "100%", marginTop: "20px" }}>
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", marginBottom: "20px" }}
      >
        OVERVIEW
      </Typography>
      <Grid2 container spacing={3} size={12}>
        {data.map((item, index) => (
          <OverviewCard key={index} {...item} />
        ))}
      </Grid2>
    </Box>
  );
};

export default Overview;
