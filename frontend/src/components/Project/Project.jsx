import React from "react";
import { Grid2, Typography, Box } from "@mui/material";
import ProgressBar from "./ProgressBar";
import StatsOverview from "./StatsOverview";
import CalendarCard from "./CalendarCard";
import FeaturedCard from "./FeaturedCard";
import EnrolledCourses from "./EnrolledCourses";

const Project = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        My Projects
      </Typography>
      
      <ProgressBar />
      
      <Grid2 container spacing={4} sx={{ marginTop: 2 }}>
        <Grid2 item size={12} xs={12} md={8}>
          <StatsOverview />
          <EnrolledCourses />
        </Grid2>
        
        <Grid2 item size={12} xs={12} md={4}>
          <CalendarCard />
          <FeaturedCard />
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Project;
