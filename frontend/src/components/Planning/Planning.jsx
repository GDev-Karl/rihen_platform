import React, { useState } from "react";
import { Container, Box } from "@mui/material";
import CalendarHeader from "./CalendarHeader";
import CalendarGrid from "./CalendarGrid";
import { fetchMockEvents } from "./mockData";

const Planning = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState(fetchMockEvents());
  const [currentView, setCurrentView] = useState("month"); // Options: 'day', 'week', 'month'

  // Changer le mois (flèches droite/gauche)
  const changeMonth = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ marginTop: 4 }}>
        <CalendarHeader
          currentDate={currentDate}
          currentView={currentView}
          setCurrentView={setCurrentView}
          changeMonth={changeMonth}
        />
        <CalendarGrid
          events={events}
          currentDate={currentDate}
          currentView={currentView}
        />
      </Box>
    </Container>
  );
};

export default Planning;
