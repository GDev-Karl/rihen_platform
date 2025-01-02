import React from 'react';
import { Box, Grid, Grid2 } from '@mui/material';
import Overview from './Overview';
import LiveEvents from './LiveEvents';
import StudyStatistics from './StudyStatistics';
import Activity from './Activity';
import MyCourses from './MyCourses';

const Dashboard = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Grid2 container spacing={2}>
        <Grid2 item xs={12}>
          <Overview />
        </Grid2>
        <Grid2 item xs={8}>
          <StudyStatistics />
        </Grid2>
        <Grid2 item xs={4}>
          <LiveEvents />
        </Grid2>
        <Grid2 item xs={8}>
          <MyCourses />
        </Grid2>
        <Grid2 item xs={4}>
          <Activity />
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Dashboard;
