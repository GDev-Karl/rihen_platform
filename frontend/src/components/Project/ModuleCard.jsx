import React from "react";
import { Grid2, Box, Typography, Divider, Chip } from "@mui/material";

const ModuleCard = ({ moduleName, status, globalScore, months }) => {
  return (
    <Grid2
      item
      sx={{
        border: "1px solid #E0E0E0",
        borderRadius: "8px",
        padding: "16px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      {/* Header : Nom du module et statut */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#333" }}>
          {moduleName}
        </Typography>
        <Chip
          label={status}
          color={status === "In progress" ? "warning" : "success"}
          variant="outlined"
        />
      </Box>

      {/* Score global */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          color: globalScore > 70 ? "green" : "red",
        }}
      >
        Score global : {globalScore}%
      </Typography>

      {/* Divider */}
      <Divider sx={{ margin: "8px 0" }} />

      {/* Liste des mois */}
      <Box>
        {months.map((month, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "8px",
            }}
          >
            {/* Nom du mois */}
            <Typography
              variant="subtitle1"
              sx={{
                color: "#5F6368",
              }}
            >
              {month.name}
            </Typography>

            {/* Score */}
            <Typography
              variant="subtitle1"
              sx={{
                color: month.score > 70 ? "green" : "red",
                fontWeight: "bold",
              }}
            >
              {month.score}%
            </Typography>

            {/* Statut */}
            <Chip
              label={month.status}
              size="small"
              color={month.status === "Completed" ? "success" : "warning"}
            />
          </Box>
        ))}
      </Box>
    </Grid2>
  );
};

export default ModuleCard;
