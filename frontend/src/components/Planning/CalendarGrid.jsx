import React from "react";
import { Grid2, Box, Typography, Chip } from "@mui/material";
import { getDaysInMonth } from "./utils";

const CalendarGrid = ({ events, currentDate }) => {
  const daysInMonth = getDaysInMonth(currentDate);

  const getEventsForDay = (day) =>
    events.filter((event) => new Date(event.date).getDate() === day);

  return (
    <Grid2 container spacing={2}>
      {daysInMonth.map((day) => (
        <Grid2 item xs={12} sm={6} md={3} key={day}>
          <Box
            sx={{
              border: "1px solid #ddd",
              borderRadius: 2,
              padding: 2,
              minHeight: 120,
              backgroundColor: "#f9f9f9",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {typeof day === "object" ? day.toLocaleDateString() : day}
            </Typography>

            <Box sx={{ marginTop: 1 }}>
              {getEventsForDay(day).map((event) => (
                <Chip
                  key={event.id}
                  label={event.title}
                  sx={{
                    marginBottom: 1,
                    backgroundColor: getEventColor(event.category),
                    color: "#fff",
                  }}
                />
              ))}
            </Box>
          </Box>
        </Grid2>
      ))}
    </Grid2>
  );
};

// Définir une couleur pour chaque catégorie d'événement
const getEventColor = (category) => {
  switch (category) {
    case "important":
      return "#f04e31";
    case "task":
      return "#357edd";
    case "meeting":
      return "#8e44ad";
    default:
      return "#7f8c8d";
  }
};

export default CalendarGrid;
