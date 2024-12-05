import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { Fragment, useState } from "react";
import "../styles/Signup.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [stateData, setStateData] = useState({});
  const handleChange = (e) => {
    setStateData((prev) => {
      prev[e.target.id] = e.target.value;
      return { ...prev };
    });
  };
  const navigate = useNavigate();
  const goToSignup = () => {
    navigate("/", { replace: true });
  };
  const gotToMainPage = () => {
    navigate("/todo", { replace: true });
  };
  return (
    <Fragment>
      <Grid container className="mainContainer">
        <Grid item xs={12} className="container">
          <Box
            className="box"
            sx={{
              width: 400,
              padding: 3,
              borderRadius: "8px",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              backgroundColor: "white",
            }}
          >
            <Grid
              container
              sx={{
                height: "100%",
                width: "100%",
                marginTop: "1rem",
              }}
            >
              <Grid item xs={12}>
                <Typography variant="h5" align="center" fontWeight="bold">
                  Welcome back
                </Typography>
                <Typography align="center" sx={{ marginTop: "0.5rem" }}>
                  Enter your details to login
                </Typography>
                <Grid container sx={{ marginTop: "1.5rem" }}>
                  <Grid item xs={12}>
                    <Typography>Email*</Typography>
                    <Box sx={{ maxWidth: "100%" }}>
                      <TextField
                        id="email"
                        autoFocus={true}
                        value={stateData?.["email"]}
                        fullWidth
                        placeholder="Enter your email"
                        variant="outlined"
                      />
                    </Box>
                  </Grid>

                  <Grid item xs={12} sx={{ marginTop: "1rem" }}>
                    <Typography>Password*</Typography>
                    <Box sx={{ maxWidth: "100%" }}>
                      <TextField
                        id="password"
                        fullWidth
                        type="password"
                        value={stateData?.["password"]}
                        placeholder="Enter your password"
                        variant="outlined"
                      />
                    </Box>
                  </Grid>

                  <Grid item xs={12} sx={{ marginTop: "1.5rem" }}>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      sx={{
                        height: "50px",
                        backgroundColor: "#1976d2",
                        fontWeight: "bold",
                      }}
                      onClick={gotToMainPage}
                    >
                      Proceed
                    </Button>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    sx={{ marginTop: "1rem", textAlign: "center" }}
                  >
                    <Typography>
                      Don't have an account?{" "}
                      <Button
                        sx={{ fontWeight: "bold", color: "#1976d2" }}
                        onClick={goToSignup}
                      >
                        Sign Up
                      </Button>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Login;
