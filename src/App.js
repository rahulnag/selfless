import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Home from "./components/HomePage/Home";
import TopTab from "./components/TopNav";
// import Footer from './components/Footer/Footer'
import ExpWalkin from "./components/Walkins/ExpWalkin";
import FresherWalkin from "./components/Walkins/FreshersWalkin";
import About from "./components/AboutUs/About";
import Openings from "./components/Openings/Openings";
import Document from "./components/Documents/Document";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      marginTop: "50px",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: "60px",
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: "60px",
    },
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <div>
        <TopTab />
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/openings" component={Openings} />
        <Route exact path="/fresherswalkin" component={FresherWalkin} />
        <Route exact path="/experiencewalkin" component={ExpWalkin} />
        <Route exact path="/documents" component={Document} />
      </Switch>
    </div>
  );
}

export default App;
