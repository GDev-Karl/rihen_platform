import React from 'react';
import { Paper, Typography, Box } from '@mui/material';

const LiveEvents = () => {
  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant="h6">Live Events</Typography>
      <Box sx={{ marginTop: 2 }}>
        <Typography>Event: Ipsum odio et integer aliquet lorem</Typography>
        <Typography variant="subtitle2">Shams Tabrez - Live</Typography>
      </Box>
    </Paper>
  );
};

export default LiveEvents;
