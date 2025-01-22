import React from "react";
import { Grid2 } from "@mui/material";
import ModuleCard from "./ModuleCard";

const moduleDataArray = [
  {
    moduleName: "Software Engineering Fundamentals",
    status: "In progress",
    globalScore: 85,
    courses: [
      {
        name: "Introduction to Software Engineering",
        score: 80,
        status: "Completed",
      },
      {
        name: "Software Development Life Cycle",
        score: 90,
        status: "In progress",
      },
      { name: "Requirements Engineering", score: 88, status: "In progress" },
    ],
  },
  {
    moduleName: "Object-Oriented Programming",
    status: "Completed",
    globalScore: 75,
    courses: [
      { name: "Introduction to OOP", score: 70, status: "Completed" },
      { name: "Advanced OOP Concepts", score: 80, status: "Completed" },
      { name: "Design Patterns in OOP", score: 78, status: "Completed" },
    ],
  },
  {
    moduleName: "Web Development",
    status: "In progress",
    globalScore: 80,
    courses: [
      { name: "HTML & CSS Fundamentals", score: 85, status: "Completed" },
      { name: "JavaScript Basics", score: 78, status: "Completed" },
      { name: "Responsive Web Design", score: 82, status: "In progress" },
      { name: "Client-Side Frameworks", score: 80, status: "In progress" },
    ],
  },
  {
    moduleName: "Database Systems",
    status: "Completed",
    globalScore: 90,
    courses: [
      { name: "Introduction to Databases", score: 95, status: "Completed" },
      { name: "Relational Databases & SQL", score: 89, status: "Completed" },
      { name: "NoSQL Databases", score: 92, status: "Completed" },
    ],
  },
  {
    moduleName: "Software Testing and Quality Assurance",
    status: "In progress",
    globalScore: 88,
    courses: [
      {
        name: "Unit Testing & Test-Driven Development",
        score: 90,
        status: "Completed",
      },
      {
        name: "Integration and System Testing",
        score: 85,
        status: "In progress",
      },
      { name: "Automated Testing Tools", score: 87, status: "In progress" },
    ],
  },
];

// Définition du composant Project
const Project = () => {
  return (
    <Grid2 container spacing={2} sx={{ padding: "16px" }}>
      {moduleDataArray.map((module, index) => (
        <Grid2 key={index} xs={12} sm={4}>
          <ModuleCard
            moduleName={module.moduleName}
            status={module.status}
            globalScore={module.globalScore}
            months={module.courses}
          />
        </Grid2>
      ))}
    </Grid2>
  );
};

export default Project;
