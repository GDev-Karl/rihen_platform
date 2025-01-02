import React, { useState } from 'react';
import { Paper, Typography, Box, ButtonGroup, Button } from '@mui/material';

const StudyStatistics = () => {
  const [view, setView] = useState('week');
  const data = view === 'week' ? [2, 4, 5, 3, 6, 2, 1] : [20, 25, 30, 22, 15, 10, 12];

  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant="h6">Study Statistics</Typography>
      <ButtonGroup sx={{ marginTop: 2 }} size="small">
        <Button onClick={() => setView('week')} variant={view === 'week' ? 'contained' : 'outlined'}>Week</Button>
        <Button onClick={() => setView('month')} variant={view === 'month' ? 'contained' : 'outlined'}>Month</Button>
      </ButtonGroup>
      <Box sx={{ marginTop: 2 }}>
        {data.map((value, index) => (
          <Box key={index} sx={{ width: 20, height: value * 10, backgroundColor: 'primary.main', margin: '5px', display: 'inline-block' }} />
        ))}
      </Box>
    </Paper>
  );
};

export default StudyStatistics;
