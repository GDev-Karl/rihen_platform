import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { fetchFeaturedData } from "./api";

const FeaturedCard = () => {
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(() => {
    const loadFeaturedData = async () => {
      const data = await fetchFeaturedData();
      setFeaturedData(data);
    };
    loadFeaturedData();
  }, []);

  if (!featuredData) return null;

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{featuredData.title}</Typography>
        <Typography variant="body2" color="textSecondary">
          {featuredData.lessons} lessons - {featuredData.quizzes} quizzes
        </Typography>
        <Typography variant="body2">
          {featuredData.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FeaturedCard;
