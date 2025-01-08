import React from "react";
import { Box, Button, Typography, IconButton } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const CalendarHeader = ({ currentDate, changeMonth }) => {
  const formattedDate = currentDate.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 2,
      }}
    >
      <IconButton onClick={() => changeMonth(-1)}>
        <ArrowBack />
      </IconButton>
      <Typography variant="h5" sx={{ textTransform: "capitalize" }}>
        {formattedDate}
      </Typography>
      <IconButton onClick={() => changeMonth(1)}>
        <ArrowForward />
      </IconButton>
    </Box>
  );
};

export default CalendarHeader;
