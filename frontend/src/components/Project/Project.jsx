import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Project = () => {
  const [data, setData] = useState(null);

  // Simulate fetching data from an API
  useEffect(() => {
    // Replace this with an actual API call
    const fetchData = async () => {
      const response = {
        programs: [
          {
            id: 1,
            name: "Program 1",
            description: "Description of Program 1",
            modules: [
              {
                id: 1,
                name: "Module 1",
                description: "Description of Module 1",
                courses: [
                  { id: 1, title: "Course 1", description: "Description of Course 1" },
                  { id: 2, title: "Course 2", description: "Description of Course 2" },
                ],
                projects: [
                  { id: 1, title: "Project 1", description: "Description of Project 1" },
                ],
                evaluations: [
                  { id: 1, title: "Evaluation 1", description: "Description of Evaluation 1" },
                ],
              },
            ],
          },
        ],
      };
      setData(response);
    };

    fetchData();
  }, []);

  if (!data) return <Typography>Loading...</Typography>;

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Programs Viewer</Typography>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          {data.programs.map((program) => (
            <Grid item xs={12} md={6} key={program.id}>
              <Card>
                <CardContent>
                  <Typography variant="h5">{program.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {program.description}
                  </Typography>

                  {program.modules.map((module) => (
                    <Accordion key={module.id} sx={{ mt: 2 }}>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>{module.name}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>{module.description}</Typography>

                        <Typography variant="h6" sx={{ mt: 2 }}>
                          Courses
                        </Typography>
                        {module.courses.map((course) => (
                          <Card sx={{ mt: 1 }} key={course.id}>
                            <CardContent>
                              <Typography>{course.title}</Typography>
                              <Typography variant="body2" color="text.secondary">
                                {course.description}
                              </Typography>
                            </CardContent>
                          </Card>
                        ))}

                        <Typography variant="h6" sx={{ mt: 2 }}>
                          Projects
                        </Typography>
                        {module.projects.map((project) => (
                          <Card sx={{ mt: 1 }} key={project.id}>
                            <CardContent>
                              <Typography>{project.title}</Typography>
                              <Typography variant="body2" color="text.secondary">
                                {project.description}
                              </Typography>
                            </CardContent>
                          </Card>
                        ))}

                        <Typography variant="h6" sx={{ mt: 2 }}>
                          Evaluations
                        </Typography>
                        {module.evaluations.map((evaluation) => (
                          <Card sx={{ mt: 1 }} key={evaluation.id}>
                            <CardContent>
                              <Typography>{evaluation.title}</Typography>
                              <Typography variant="body2" color="text.secondary">
                                {evaluation.description}
                              </Typography>
                            </CardContent>
                          </Card>
                        ))}
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Project;
