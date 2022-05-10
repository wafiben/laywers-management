import React, { useState } from "react";
import {
  FormControl,
  Button,
  Grid,
  TextField,
  Box,
  Typography,
  Paper,
} from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import SendIcon from "@mui/icons-material/Send";
import { keyframes } from "@mui/system";
import "./Contact.css"

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "30%",
    margin: "auto",
    height: "500px",
    paddinBottom: "400px",
  },
  Box: {
    border: "1px solid white",
    borderRaduis: "16px",
    marginTop: "200px",
  },
}));
function Contact() {
  const classes = useStyles();
  return (
    <div className="contact">
      <Paper className={classes.paper} elevation={8}>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "45ch" },
          }}
          noValidate
          autoComplete="off"
          className={classes.Box}
        >
          <div style={{ paddingTop: "50px" }}>
            <Typography variant="subtitle1" display="block" gutterBottom>
              Sent message to request your login
            </Typography>
            <FormControl>
              <TextField
                id="outlined-basic"
                label="first-name"
                variant="outlined"
              />
            </FormControl>
          </div>
          <div>
            <FormControl>
              <TextField
                id="outlined-basic"
                label="last-name"
                variant="outlined"
              />
            </FormControl>
          </div>
          <div>
            <FormControl>
              <TextField id="outlined-basic" label="email" variant="outlined" />
            </FormControl>
          </div>
          <div>
            <FormControl>
              <TextField
                id="outlined-basic"
                label="message-want to have an account"
                variant="outlined"
              />
            </FormControl>
          </div>
          <Button
            variant="outlined"
            onClick={() => alert("hello")}
            endIcon={<SendIcon />}
          >
            Submit
          </Button>
        </Box>
      </Paper>
    </div>
  );
}

export default Contact;
