import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import EnrolledCourseCard from "./EnrolledCourseCard";
import { fetchEnrolledCourses } from "./api";

const EnrolledCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const loadCourses = async () => {
      const data = await fetchEnrolledCourses();
      setCourses(data);
    };
    loadCourses();
  }, []);

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Enrolled Courses
      </Typography>
      {courses.map((course, index) => (
        <EnrolledCourseCard key={index} course={course} />
      ))}
    </Box>
  );
};

export default EnrolledCourses;
