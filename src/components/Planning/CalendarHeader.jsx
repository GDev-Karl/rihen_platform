import React from 'react';
import { Button, Typography, Box } from '@mui/material';

const CalendarHeader = ({ currentDate, currentView, setCurrentView, changeMonth }) => {
  const monthName = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 2 }}>
      <Button onClick={() => changeMonth(-1)}>&lt; Prev</Button>
      <Typography variant="h6">{monthName}</Typography>
      <Button onClick={() => changeMonth(1)}>Next &gt;</Button>
      <Box>
        <Button onClick={() => setCurrentView('day')}>Day</Button>
        <Button onClick={() => setCurrentView('week')}>Week</Button>
        <Button onClick={() => setCurrentView('month')} variant="contained" color="primary">
          Month
        </Button>
      </Box>
    </Box>
  );
};

export default CalendarHeader;
