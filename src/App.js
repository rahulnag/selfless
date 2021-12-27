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
import ExpOpening from "./components/Openings/ExpOpening";
import FreshersOpening from "./components/Openings/FreshersOpening";
import About from "./components/AboutUs/About";
import Openings from "./components/Openings/Openings";
import Document from "./components/Documents/Document";
import Testimonial from "./components/Testimonial/Testimonial";
import { testinomial_data } from "./components/Testimonial/testinomial_data";

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
  const [value, setValue] = React.useState(0);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <div>
        <TopTab value={value} setValue={setValue} />
      </div>
      <Switch>
        <Route exact path="/">
          <Home
            setValue={setValue}
            testinomial_data={testinomial_data.slice(0, 5)}
          />
        </Route>
        <Route exact path="/openings">
          <Openings setValue={setValue} />
        </Route>
        <Route exact path="/aboutus">
          <About setValue={setValue} />
        </Route>
        <Route exact path="/documents">
          <Document setValue={setValue} />
        </Route>
        <Route exact path="/fresherswalkin">
          <FresherWalkin setValue={setValue} />
        </Route>
        <Route exact path="/experiencewalkin">
          <ExpWalkin setValue={setValue} />
        </Route>
        <Route exact path="/testinomial">
          <Testimonial testinomial_data={testinomial_data} />
        </Route>
        <Route exact path="/experienceopenings">
          <ExpOpening setValue={setValue} />
        </Route>
        <Route exact path="/freshersopenings">
          <FreshersOpening setValue={setValue} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
