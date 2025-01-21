import React from 'react';
import { Box } from '@mui/material';

const Event = ({ event, onClick }) => {
  return (
    <Box
      sx={{
        backgroundColor: event.color,
        color: 'white',
        padding: 1,
        borderRadius: 1,
        cursor: 'pointer',
        marginTop: 1,
      }}
      onClick={onClick}
    >
      {event.title}
    </Box>
  );
};

export default Event;
