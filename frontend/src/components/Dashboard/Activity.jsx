import React from 'react';
import { Paper, Typography, List, ListItem, ListItemText } from '@mui/material';

const Activity = () => {
  const activities = [
    { user: 'Felix', action: 'has replied on "Aliquam enim in cras arcu"', date: '25 Sep' },
    { user: 'Ludwig', action: 'invited you to "Imperdiet enim est, varius faucibus"', date: '25 Sep' },
    { user: 'Jonathon', action: 'commented on "Venenatis aliquam sit pellentesque"', date: '24 Sep' }
  ];

  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant="h6">Activity</Typography>
      <List>
        {activities.map((activity, index) => (
          <ListItem key={index}>
            <ListItemText primary={`${activity.user} ${activity.action}`} secondary={activity.date} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default Activity;
