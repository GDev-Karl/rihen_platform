import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { fetchCalendarData } from "./api";

const CalendarCard = () => {
  const [calendarData, setCalendarData] = useState(null);

  useEffect(() => {
    const loadCalendarData = async () => {
      const data = await fetchCalendarData();
      setCalendarData(data);
    };
    loadCalendarData();
  }, []);

  if (!calendarData) return null;

  return (
    <Card sx={{ marginBottom: 4 }}>
      <CardContent>
        <Typography variant="h6">{calendarData.month}</Typography>
        <Typography variant="body2" color="textSecondary">
          {calendarData.assignment}
        </Typography>
        <Typography variant="body2">
          Due Date: <strong>{calendarData.dueDate}</strong>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CalendarCard;
