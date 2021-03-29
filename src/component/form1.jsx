import Grid from "@material-ui/core/Grid";
import React from "react";
import TextField from "@material-ui/core/TextField";
import { Typography } from "@material-ui/core";

export default function Form1() {
  return (
    <div>
      <Typography variant="h3" style={{ color: "blue" }}>
        Form 1
      </Typography>
      <form noValidate>
        <Grid
          container
          xs={9}
          spacing={2}
          direction="column"
          style={{
            border: "2px solid blue",
            borderRadius: "5px",
            marginTop: "30px",
          }}
          alignItems="center"
        >
          <Grid item xs={7} style={{ marginTop: "20px" }}>
            <TextField
              autoComplete="fname"
              name="firstName"
              variant="outlined"
              required
              fullWidth
              id="firstName"
              label="First Name"
              autoFocus
            />
          </Grid>
          <br />
          <Grid item xs={7}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="lname"
            />
          </Grid>
          <br />
          <Grid item xs={7}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
          </Grid>
          <br />
          <Grid item xs={7}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
