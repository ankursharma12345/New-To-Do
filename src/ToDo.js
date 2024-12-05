import { Box, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import "./styles/ToDo.css";

const ToDo = ({ id }) => {
  return (
    <>
      <Grid container className="main">
        <Grid item xs={12} sm={12} md={12}>
          <Grid item xs={12} sm={12} md={12} className="container">
            <Typography variant="h5">Add Your {id}</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} className="container">
            <Box sx={{ width: 500, maxWidth: "80%" }}>
              <TextField fullWidth id="fullWidth" />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ToDo;
