import React from "react";
import { Box, LinearProgress, Typography } from "@mui/material";

const ProgressBar = () => {
  return (
    <Box sx={{ textAlign: "center", marginBottom: 4 }}>
      <Typography variant="subtitle1">Progress</Typography>
      <Box sx={{ position: "relative", width: "100%", height: 50 }}>
        <img
          src="path/to/illustration.png" // Ajoutez le chemin de l'image
          alt="progress"
          style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)" }}
        />
        <LinearProgress
          variant="determinate"
          value={30}
          sx={{ height: 8, borderRadius: 5 }}
        />
      </Box>
      <Typography variant="caption">30%</Typography>
    </Box>
  );
};

export default ProgressBar;
