import React from "react";
import { Box, Typography, Avatar, Grid2, IconButton } from "@mui/material";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

// Composant pour une carte d'événement
const LiveEventCard = ({ event }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        border: "1px solid #E0E0E0",
        borderRadius: "8px",
        padding: "16px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        gap: "16px",
      }}
    >
      {/* Logo ou image de l'événement */}
      <Avatar
        variant="square"
        sx={{ width: "64px", height: "64px", backgroundColor: "#1E88E5" }}
        src={event.image} // Placeholder pour l'image
        alt={event.title}
      >
        {/* Initiales si aucune image n'est fournie */}
        {event.title.charAt(0).toUpperCase()}
      </Avatar>

      {/* Contenu principal */}
      <Box sx={{ flexGrow: 1 }}>
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: "bold", color: "#333" }}
        >
          {event.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "#5F6368", marginTop: "4px" }}
        >
          {event.description}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: "8px",
            gap: "8px",
          }}
        >
          <Avatar
            sx={{ width: "24px", height: "24px", backgroundColor: "#E0E0E0" }}
          />
          <Typography variant="caption" sx={{ color: "#333" }}>
            {event.host}
          </Typography>
        </Box>
      </Box>

      {/* Statut "Live" */}
      <Box sx={{ textAlign: "right" }}>
        <IconButton size="small" disableRipple>
          <RadioButtonCheckedIcon sx={{ color: "#E53935" }} />
        </IconButton>
        <Typography variant="caption" sx={{ color: "#E53935", fontWeight: "bold" }}>
          Live
        </Typography>
      </Box>
    </Box>
  );
};

// Composant principal pour afficher une liste d'événements
const LiveEvents = () => {
  // Données simulées
  const events = [
    {
      id: 1,
      title: "Live Coding Workshop",
      description: "Learn React and Material-UI with hands-on examples.",
      host: "Jane Doe",
      image: "assets/images/", // Ajouter un lien d'image si nécessaire
    },
    {
      id: 2,
      title: "Design Patterns Talk",
      description: "An introduction to modern design patterns.",
      host: "John Smith",
      image: "", // Ajouter un lien d'image si nécessaire
    },
  ];

  return (
    <Box>
      <Typography
        variant="h6"
        sx={{ fontWeight: "bold", marginBottom: "16px", color: "#333" }}
      >
        Live Events
      </Typography>
      <Grid2 container spacing={2}>
        {events.map((event) => (
          <Grid2 item xs={12} sm={6} md={4} key={event.id}>
            <LiveEventCard event={event} />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default LiveEvents;
