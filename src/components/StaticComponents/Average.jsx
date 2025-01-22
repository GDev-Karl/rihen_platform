import React from "react";
import { Paper, Typography, Divider } from "@mui/material";

const moduleDataArray = [
  {
    moduleName: "Software Engineering Fundamentals",
    globalScore: 85,
    courses: [
      { score: 80 },
      { score: 90 },
      { score: 88 },
    ],
  },
  {
    moduleName: "Object-Oriented Programming",
    globalScore: 75,
    courses: [
      { score: 70 },
      { score: 80 },
      { score: 78 },
    ],
  },
  {
    moduleName: "Web Development",
    globalScore: 80,
    courses: [
      { score: 85 },
      { score: 78 },
      { score: 82 },
      { score: 80 },
    ],
  },
  {
    moduleName: "Database Systems",
    globalScore: 90,
    courses: [
      { score: 95 },
      { score: 89 },
      { score: 92 },
    ],
  },
  {
    moduleName: "Software Testing and Quality Assurance",
    globalScore: 88,
    courses: [
      { score: 90 },
      { score: 85 },
      { score: 87 },
    ],
  },
];

const calculateAverage = () => {
  const totalScores = moduleDataArray.reduce((sum, module) => {
    return sum + module.globalScore;
  }, 0);

  const average = totalScores / moduleDataArray.length;
  return average.toFixed(2);
};

const Average = () => {
  const averageScore = calculateAverage();

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6">Software Engineering</Typography>
      <Divider sx={{ my: 1 }} />
      <Typography>Average: {averageScore}%</Typography>
    </Paper>
  );
};

export default Average;
