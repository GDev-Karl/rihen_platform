import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import Event from './Event';
import { getDaysInMonth, getWeekDates } from './utils';

const CalendarGrid = ({ events, currentDate, currentView, setSelectedEvent }) => {
  const days =
    currentView === 'month'
      ? getDaysInMonth(currentDate)
      : getWeekDates(currentDate);

  return (
    <Grid container spacing={1}>
      {days.map((day) => (
        <Grid item xs={currentView === 'day' ? 12 : 1} key={day}>
          <Paper sx={{ padding: 1, height: '100%' }}>
            <Typography variant="caption">{day.toLocaleDateString()}</Typography>
            {events
              .filter((evt) => new Date(evt.start).toDateString() === day.toDateString())
              .map((evt) => (
                <Event key={evt.id} event={evt} onClick={() => setSelectedEvent(evt)} />
              ))}
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default CalendarGrid;
