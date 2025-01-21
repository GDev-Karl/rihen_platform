import React from 'react';
import { Box, Grid, Grid2 } from '@mui/material';
import Overview from './Overview';
import LiveEvents from './LiveEvents';
import StudyStatistics from './StudyStatistics';
import Activity from './Activity';
import MyCourses from './MyCourses';
import Progress from './Progress';

const Dashboard = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Grid2 container spacing={2}>
        <Grid2 item size={8}>
          <Overview userId={1}/>
        </Grid2>
        <Grid2 item size={4}>
          <LiveEvents />
        </Grid2>
      </Grid2>

      <Grid2 container spacing={2}>
        <Grid2 item size={8}>
          <Progress />
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Dashboard;
