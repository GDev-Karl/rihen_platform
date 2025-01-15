import React, { useState, useEffect } from "react";
import { Box, Typography, Grid2 } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import ArticleIcon from "@mui/icons-material/Article";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { getUserOverview } from "../../services/api";


const OverviewCard = ({ icon, title, value }) => (
  <Grid2
    item
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "space-between",
      border: "1px solid #E0E0E0",
      borderRadius: "8px",
      padding: "16px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    }}
  >
    <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <Box>{icon}</Box>
      <Typography variant="subtitle1" sx={{ color: "#5F6368" }}>
        {title}
      </Typography>
    </Box>
    <Typography
      variant="h4"
      sx={{
        marginTop: "16px",
        fontWeight: "bold",
        color: "#333",
        alignSelf: "center",
      }}
    >
      {value}
    </Typography>
  </Grid2>
);

const Overview = ({ userId }) => {
  const [overviewData, setOverviewData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Appel à l'API pour récupérer les données
    getUserOverview(userId)
      .then((data) => {
        // Stocker les éléments de la réponse dans un tableau
        const formattedData = [
          {
            title: "Courses in progress",
            value: data.find((item) => item.title === "Courses in progress")?.value || 0,
            icon: <SchoolIcon style={{ color: "#1DA1F2" }} />,
          },
          {
            title: "Active Projects",
            value: data.find((item) => item.title === "Active Projects")?.value || 0,
            icon: <ArticleIcon style={{ color: "#1DA1F2" }} />,
          },
          {
            title: "Hours Learning",
            value: data.find((item) => item.title === "Hours Learning")?.value || "0h 0m",
            icon: <AccessTimeIcon style={{ color: "#1DA1F2" }} />,
          },
          {
            title: "Community score",
            value: data.find((item) => item.title === "Community score")?.value || 0,
            icon: <EmojiEventsIcon style={{ color: "#1DA1F2" }} />,
          },
        ];
        setOverviewData(formattedData); // Mettre les données formatées dans l'état
        setLoading(false); // Arrêter le chargement
      })
      .catch((error) => {
        setError(error.message); // En cas d'erreur, afficher l'erreur
        setLoading(false);
      });
  }, [userId]);

  if (loading) {
    return <Typography>Loading...</Typography>; // Affichage du message de chargement
  }

  if (error) {
    return <Typography>{error}</Typography>; // Affichage de l'erreur
  }

  return (
    <Box sx={{ width: "100%", marginTop: "20px" }}>
      <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "20px" }}>
        OVERVIEW
      </Typography>
      <Grid2 container spacing={3} size={12}>
        {overviewData.map((item, index) => (
          <OverviewCard key={index} icon={item.icon} title={item.title} value={item.value} />
        ))}
      </Grid2>
    </Box>
  );
};

export default Overview;
