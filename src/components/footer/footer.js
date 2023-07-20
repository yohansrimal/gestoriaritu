import { Box, Card } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box sx={{ mt: 2, mb: 2 }}>
      <Card
        sx={{
          minWidth: "100%",
          minHeight: 400,
          backgroundColor: "black",
          color: "white",
        }}
      >
        Footer goes here...
      </Card>
    </Box>
  );
};

export default Footer;
