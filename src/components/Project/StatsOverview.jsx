import React, { useEffect, useState } from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import { fetchStats } from "./api";

const StatsOverview = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const loadStats = async () => {
      const data = await fetchStats();
      setStats(data);
    };
    loadStats();
  }, []);

  return (
    <Grid container spacing={2}>
      {stats.map((stat, index) => (
        <Grid item xs={6} md={3} key={index}>
          <Card>
            <CardContent>
              <Typography variant="h6" align="center">
                {stat.value}
              </Typography>
              <Typography variant="caption" align="center" display="block">
                {stat.label}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default StatsOverview;
