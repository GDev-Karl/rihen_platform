import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Simulated data
const cursusData = [
  {
    name: "Software Engineering",
    modules: [
      {
        name: "Foundations of Computing",
        themes: [
          {
            name: "ES6 Basics",
            details: {
              courses: ["Introduction to ES6", "Using let and const"],
              projects: ["Build a JavaScript Calculator"],
              evaluations: ["Quiz: ES6 Basics"],
            },
          },
          {
            name: "Algorithmique et structures de données",
            details: {
              courses: ["Sorting Algorithms", "Data Structures"],
              projects: ["Implement a Binary Search Tree"],
              evaluations: ["Quiz: Data Structures"],
            },
          },
        ],
      },
      {
        name: "High-Level Programming",
        themes: [
          {
            name: "Python Basics",
            details: {
              courses: ["Introduction to Python", "Control Structures"],
              projects: ["Build a To-Do App in Python"],
              evaluations: ["Quiz: Python Basics"],
            },
          },
        ],
      },
    ],
  },
  {
    name: "Game Development",
    modules: [
      {
        name: "Introduction to Game Design",
        themes: [
          {
            name: "Game Design Basics",
            details: {
              courses: ["Principles of Game Design", "Storyboarding"],
              projects: ["Design a Game Prototype"],
              evaluations: ["Quiz: Game Design Basics"],
            },
          },
        ],
      },
    ],
  },
];

const ThemeDetails = ({ details }) => (
  <Box>
    <Typography variant="subtitle1">Courses:</Typography>
    <List>
      {details.courses.map((course, index) => (
        <ListItem key={index}>
          <ListItemText primary={course} />
        </ListItem>
      ))}
    </List>
    <Typography variant="subtitle1">Projects:</Typography>
    <List>
      {details.projects.map((project, index) => (
        <ListItem key={index}>
          <ListItemText primary={project} />
        </ListItem>
      ))}
    </List>
    <Typography variant="subtitle1">Evaluations:</Typography>
    <List>
      {details.evaluations.map((evaluation, index) => (
        <ListItem key={index}>
          <ListItemText primary={evaluation} />
        </ListItem>
      ))}
    </List>
  </Box>
);

const CursusModules = () => {
  const [expandedModule, setExpandedModule] = useState(null);
  const [expandedTheme, setExpandedTheme] = useState(null);

  const handleModuleExpand = (moduleName) => {
    setExpandedModule(expandedModule === moduleName ? null : moduleName);
  };

  const handleThemeExpand = (themeName) => {
    setExpandedTheme(expandedTheme === themeName ? null : themeName);
  };

  return (
    <Box sx={{ p: 3 }}>
      {cursusData.map((cursus, index) => (
        <Card key={index} sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h5" component="div" gutterBottom>
              {cursus.name}
            </Typography>
            {cursus.modules.map((module, modIndex) => (
              <Accordion
                key={modIndex}
                expanded={expandedModule === module.name}
                onChange={() => handleModuleExpand(module.name)}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>{module.name}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {module.themes.map((theme, themeIndex) => (
                    <Accordion
                      key={themeIndex}
                      expanded={expandedTheme === theme.name}
                      onChange={() => handleThemeExpand(theme.name)}
                    >
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>{theme.name}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <ThemeDetails details={theme.details} />
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </AccordionDetails>
              </Accordion>
            ))}
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default CursusModules;
