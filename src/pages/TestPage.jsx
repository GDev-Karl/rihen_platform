import React from "react";
import {
  Grid2,
  Box,
  List,
  ListItem,
  Typography,
  Paper,
  Divider,
  Grid,
} from "@mui/material";

const Sidebar = () => (
  <Box sx={{ width: "15%", bgcolor: "#f5f5f5", height: "100vh" }}>
    <List>
      {["Home", "Events", "Projects", "Scores"].map((text) => (
        <ListItem key={text}>{text}</ListItem>
      ))}
    </List>
  </Box>
);

const Header = () => (
  <Box sx={{ p: 2, bgcolor: "#fff", boxShadow: 1 }}>
    <Typography variant="h6">Rihen</Typography>
  </Box>
);

const DashboardHeader = () => (
  <Box sx={{ p: 2, bgcolor: "#fff", boxShadow: 1 }}>
    <Typography variant="h6">Short Specializations</Typography>
  </Box>
);

const CurrentProjects = () => (
  <Paper sx={{ p: 2, mb: 2 }}>
    <Typography variant="h6">Current Projects</Typography>
    <Typography>
      <strong>Webstack - Portfolio Project</strong>
      <br />
      Deadline: Jan 10, 2025
    </Typography>
  </Paper>
);

const ScoresSection = () => (
  <Paper sx={{ p: 2 }}>
    <Typography variant="h6">Scores - Short Specializations</Typography>
    <Divider sx={{ my: 1 }} />
    <Typography>Average: 68.95%</Typography>
  </Paper>
);

const MainContent = () => (
  <Box sx={{ width: "85%", p: 2 }}>
    <CurrentProjects />
  </Box>
);

const TestPage = () => (
  <Box sx={{ width: "100%", marginTop: "10px" }}>
    <Header />
    <Grid2 container spacing={3}>
      <Grid2 size="auto">
        <Sidebar />
      </Grid2>
      <Grid2 size={6}>
        <Grid2 container item spacing={3}>
          <ScoresSection />
          {/*<MainContent /> */}
        </Grid2>
      </Grid2>
    </Grid2>
  </Box>
);

export default TestPage;
