import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function Loginform() {
  return (
    <div>
      <p style={{ fontSize: "17px", fontWeight: "600", color: "#604949" }}>
        Login for checkout counter
      </p>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="counter ID" variant="outlined" />
        <br /> <br />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <br /> <br />
        <Link
          to={{
            pathname: "/dashbord",
          }}
        >
          <Button variant="contained">Sign in</Button>
        </Link>
      </Box>
    </div>
  );
}
