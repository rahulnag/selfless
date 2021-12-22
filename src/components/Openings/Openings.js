import React, { useCallback, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: "30vh",
    width: "auto",
    padding: "10px",
    fontSize: "2em",
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
  const F_Walkin = useCallback(
    () => history.push("/fresherswalkin"),
    [history]
  );
  const E_Walkin = useCallback(
    () => history.push("/experiencewalkin"),
    [history]
  );
  const F_Openings = useCallback(
    () => history.push("/freshersopenings"),
    [history]
  );
  const E_Openings = useCallback(
    () => history.push("/experienceopenings"),
    [history]
  );

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
          backgroundColor: "lightGrey",
          margin: "10px",
          padding: "10px",
        }}
        onClick={() => {
          F_Walkin();
        }}
      >
        <Paper lg={5.5} md={5} sm={12} xs={12} className={classes.paper}>
          Freshers Daily Walkin List
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
          backgroundColor: "lightGrey",
          margin: "10px",
          padding: "10px",
        }}
        onClick={() => {
          E_Walkin();
        }}
      >
        <Paper lg={5.5} md={5} sm={12} xs={12} className={classes.paper}>
          Experienced Daily Walkin List
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
          backgroundColor: "lightGrey",
          margin: "10px",
          padding: "10px",
        }}
        onClick={() => {
          F_Openings();
        }}
      >
        <Paper lg={5.5} md={5} sm={12} xs={12} className={classes.paper}>
          Freshers Openings
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
          backgroundColor: "lightGrey",
          margin: "10px",
          padding: "10px",
        }}
        onClick={() => {
          E_Openings();
        }}
      >
        <Paper lg={5.5} md={5} sm={12} xs={12} className={classes.paper}>
          Experienced Openings
        </Paper>
      </Grid>
    </Grid>
  );
}
