import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const EnrolledCourseCard = ({ course }) => {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h6">{course.title}</Typography>
        {course.completed ? (
          <Typography variant="body2" color="success.main">
            Completed
          </Typography>
        ) : (
          <Typography variant="body2">
            Progress: {course.progress}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default EnrolledCourseCard;
