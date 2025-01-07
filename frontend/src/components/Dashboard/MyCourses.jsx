import React from 'react';
import { Paper, Typography, Grid, Box, Grid2 } from '@mui/material';

const MyCourses = () => {
  const courses = [
    { title: 'Introduction to lorem ipsum...', progress: 50 },
    { title: 'English for today', progress: 70 },
    { title: 'Basic of Lorem ipsum color...', progress: 30 }
  ];

  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant="h6">My Courses</Typography>
      <Grid2 container spacing={2} sx={{ marginTop: 2 }}>
        {courses.map((course, index) => (
          <Grid2 item xs={4} key={index}>
            <Paper sx={{ padding: 2, textAlign: 'center' }}>
              <Typography>{course.title}</Typography>
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: '50%',
                  border: '5px solid',
                  borderColor: 'primary.main',
                  lineHeight: '50px',
                  margin: 'auto'
                }}
              >
                {course.progress}%
              </Box>
            </Paper>
          </Grid2>
        ))}
      </Grid2>
    </Paper>
  );
};

export default MyCourses;
