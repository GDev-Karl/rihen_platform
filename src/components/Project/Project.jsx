import React from "react";
import { Grid2 } from "@mui/material";
import ModuleCard from "./ModuleCard";


const moduleDataArray = [
  {
    moduleName: "Module 1",
    status: "In progress",
    globalScore: 85,
    courses: [
      { name: "Month 1", score: 80, status: "Completed" },
      { name: "Month 2", score: 90, status: "In progress" },
    ],
  },
  {
    moduleName: "Module 2",
    status: "Completed",
    globalScore: 75,
    courses: [
      { name: "Month 1", score: 70, status: "Completed" },
      { name: "Month 2", score: 80, status: "Completed" },
    ],
  },

  {
    moduleName: "Module 2",
    status: "Completed",
    globalScore: 75,
    courses: [
      { name: "Month 1", score: 70, status: "Completed" },
      { name: "Month 2", score: 80, status: "Completed" },
    ],
  },

  {
    moduleName: "Module 2",
    status: "Completed",
    globalScore: 75,
    courses: [
      { name: "Month 1", score: 70, status: "Completed" },
      { name: "Month 2", score: 80, status: "Completed" },
    ],
  },

  {
    moduleName: "Module 2",
    status: "Completed",
    globalScore: 75,
    courses: [
      { name: "Month 1", score: 70, status: "Completed" },
      { name: "Month 2", score: 80, status: "Completed" },
    ],
  },

  {
    moduleName: "Module 2",
    status: "Completed",
    globalScore: 75,
    courses: [
      { name: "Month 1", score: 70, status: "Completed" },
      { name: "Month 2", score: 80, status: "Completed" },
    ],
  },

  {
    moduleName: "Module 2",
    status: "Completed",
    globalScore: 75,
    courses: [
      { name: "Month 1", score: 70, status: "Completed" },
      { name: "Month 2", score: 80, status: "Completed" },
    ],
  },
  // Ajoutez plus de modules ici
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