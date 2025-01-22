import React from "react";
import { CircularProgress, Typography, Box, Grid2, Stack } from "@mui/material";

const ProgressCircle = ({ value, color }) => {
  return (
    <Box
      position="relative"
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
    >
      <CircularProgress
        variant="determinate"
        value={value}
        size={150}
        thickness={6}
        sx={{ color }}
      />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h6" component="div" fontWeight="bold">
          {`${Math.round(value)}%`}
        </Typography>
      </Box>
    </Box>
  );
};

const Progress = () => {
  // Données simulées
  const progressData = [
    { label: "Courses", value: 45, color: "#004D40" }, // Cercle vert foncé
    { label: "Projects", value: 80, color: "#1E88E5" }, // Cercle bleu
  ];

  return (
    <Box
      sx={{
        //style
        display: "block",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-between",
        border: "1px solid #E0E0E0",
        borderRadius: "8px",
        padding: "16px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Titre */}
      <Typography variant="h6" gutterBottom align="center">
        PROGRESS
      </Typography>

      {/* Grille pour positionner les cercles */}
      <Grid2 container spacing={4}>
        {progressData.map((data, index) => (
          <Grid2 item size={12} key={index}>
            <Box display="flex" flexDirection="column" alignItems="center">
              {/* Cercle de progression */}
              <ProgressCircle value={data.value} color={data.color} />
              {/* Légende en dessous */}
              <Stack
                key={index}
                direction="row"
                alignItems="center"
                spacing={5}
              >
                <Box
                  sx={{
                    width: 20,
                    height: 20,
                    backgroundColor: data.color,
                    borderRadius: "50%",
                  }}
                ></Box>
                <Typography variant="body2">{data.label}</Typography>
              </Stack>
            </Box>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default Progress;
