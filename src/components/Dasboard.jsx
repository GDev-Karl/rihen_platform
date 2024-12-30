import React from "react";
import { Grid2, Paper, Typography, Divider, Box } from "@mui/material";

const Dashboard = () => {
  return (
    <Grid2 container spacing={2}>
      {/* Upcoming Events */}
      <Grid2 item xs={12} md={6}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6">Upcoming Events</Typography>
          <Divider sx={{ my: 1 }} />
          <Typography>No upcoming events</Typography>
        </Paper>
      </Grid2>

      {/* Current Projects */}
      <Grid2 item xs={12} md={6}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6">Current Projects</Typography>
          <Divider sx={{ my: 1 }} />
          <Typography>
            <b>Webstack - Portfolio Project</b>
          </Typography>
          <Typography>Started: Dec 13, 2024</Typography>
          <Typography>
            Deadline: Jan 10, 2025 (in 11 days) - 0.0% done
          </Typography>
        </Paper>
      </Grid2>

      {/* Scores */}
      <Grid2 item xs={12}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6">Scores</Typography>
          <Divider sx={{ my: 1 }} />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            {/* Short Specializations */}
            <Box>
              <Typography variant="subtitle1">
                Scores - Short Specializations
              </Typography>
              <Typography>Average: 68.95%</Typography>
            </Box>
            {/* SE Foundations */}
            <Box>
              <Typography variant="subtitle1">
                Scores - SE Foundations
              </Typography>
              <Typography>Average: 79.78%</Typography>
            </Box>
          </Box>
        </Paper>
      </Grid2>
    </Grid2>
  );
};

export default Dashboard;
