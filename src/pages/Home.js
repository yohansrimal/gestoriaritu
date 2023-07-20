import React from "react";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";

const Home = () => {
  return (
    <Grid container spacing={2}>
      <Grid item md={8} xs={12}>
        <Card
          sx={{
            minWidth: "100%",
            minHeight: 500,
            backgroundColor: "lightblue",
          }}
        >
          {" "}
          Content
        </Card>
      </Grid>
      <Grid item md={4} xs={12}>
        <Card
          sx={{ minWidth: "100%", minHeight: 500, backgroundColor: "cyan" }}
        >
          Content
        </Card>
      </Grid>
      <Grid item md={4} xs={12} sx={{ minHeight: 500 }}>
        <Grid container rowSpacing={3}>
          <Grid item xs={12}>
            <Card
              sx={{
                minWidth: "100%",
                minHeight: 150,
                backgroundColor: "lightgreen",
              }}
            >
              Content
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card
              sx={{
                minWidth: "100%",
                minHeight: 150,
                backgroundColor: "lightgray",
              }}
            >
              Content
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card
              sx={{
                minWidth: "100%",
                minHeight: 150,
                backgroundColor: "lightskyblue",
              }}
            >
              Content
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={8} xs={12}>
        <Card
          sx={{
            minWidth: "100%",
            minHeight: 500,
            backgroundColor: "lightsalmon",
          }}
        >
          Content
        </Card>
      </Grid>
    </Grid>
  );
};

export default Home;
