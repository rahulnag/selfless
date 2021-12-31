import React, { useCallback, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Paper from "@material-ui/core/Paper";
import { useHistory } from "react-router-dom";
import "./Openings.css";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: "30vh",
    width: "auto",
    padding: "10px",
    fontSize: "2em",
    color: "#0e815e",
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function Openings({ setValue }) {
  // setValue(1);
  const [spacing, setSpacing] = React.useState(2);

  const classes = useStyles();
  const history = useHistory();
  const F_Walkin = useCallback(() => history.push("/fresherswalkin"), [
    history,
  ]);
  const E_Walkin = useCallback(() => history.push("/experiencewalkin"), [
    history,
  ]);
  const F_Openings = useCallback(() => history.push("/freshersopenings"), [
    history,
  ]);
  const E_Openings = useCallback(() => history.push("/experienceopenings"), [
    history,
  ]);

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };
  useEffect(() => {
    setValue(1);
  }, []);

  return (
    <Grid container justify="center" className={classes.root}>
      <Grid
        align="center"
        lg={5.5}
        md={5}
        sm={12}
        xs={12}
        style={{
          borderRadius: "10px",
          backgroundColor: "white",
          margin: "10px",
          padding: "10px",
          boxShadow: "0px 3px 24px -3px rgba(0,0,0,0.75)",
        }}
        onClick={() => {
          F_Openings();
        }}
      >
        <Paper
          lg={5.5}
          md={5}
          sm={12}
          xs={12}
          className={classes.paper}
          elevation={0}
        >
          Freshers Openings
          <br />
          <p className="OpeningDescription">
            Click here to get the huge list of Opening for Freshers in multiple
            positions across India
          </p>
        </Paper>
      </Grid>

      <Grid
        align="center"
        lg={5.5}
        md={5}
        sm={12}
        xs={12}
        style={{
          borderRadius: "10px",
          backgroundColor: "white",
          margin: "10px",
          padding: "10px",
          boxShadow: "0px 3px 24px -3px rgba(0,0,0,0.75)",
        }}
        onClick={() => {
          E_Openings();
        }}
      >
        <Paper
          lg={5.5}
          md={5}
          sm={12}
          xs={12}
          className={classes.paper}
          elevation={0}
        >
          Experienced Openings
          <br />
          <p className="OpeningDescription">
            Click here to get the huge list of Opening for Experienced in
            multiple positions across India
          </p>
        </Paper>
      </Grid>
      <Grid
        align="center"
        lg={5.5}
        md={5}
        sm={12}
        xs={12}
        style={{
          borderRadius: "10px",
          margin: "10px",
          padding: "10px",
          boxShadow: "0px 3px 24px -3px rgba(0,0,0,0.75)",
          backgroundColor: "white",
        }}
        onClick={() => {
          F_Walkin();
        }}
      >
        <Paper
          lg={5.5}
          md={5}
          sm={12}
          xs={12}
          className={classes.paper}
          elevation={0}
        >
          Freshers Daily Walkin List
          <br />
          <p className="OpeningDescription">
            Click here to get the huge list of Daily Walkins for Freshers across
            India
          </p>
        </Paper>
      </Grid>

      <Grid
        align="center"
        lg={5.5}
        md={5}
        sm={12}
        xs={12}
        style={{
          borderRadius: "10px",
          backgroundColor: "white",
          margin: "10px",
          padding: "10px",
          boxShadow: "0px 3px 24px -3px rgba(0,0,0,0.75)",
        }}
        onClick={() => {
          E_Walkin();
        }}
      >
        <Paper
          lg={5.5}
          md={5}
          sm={12}
          xs={12}
          className={classes.paper}
          elevation={0}
        >
          Experienced Daily Walkin List
          <br />
          <p className="OpeningDescription">
            Click here to get the huge list of Daily Walkins for Experienced
            across India{" "}
          </p>
        </Paper>
      </Grid>
    </Grid>
  );
}
