import React from "react";
import { Paper, Typography, Divider } from "@mui/material";

const Average = () => (
  <Paper sx={{ p: 2 } }>
    <Typography variant="h6">Scores - Game Development</Typography>
    <Divider sx={{ my: 1 }} />
    <Typography>Average: 68.95%</Typography>
  </Paper>
);

export default Average;
