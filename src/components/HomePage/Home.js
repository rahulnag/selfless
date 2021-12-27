import React, { useCallback, useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
// import { Button, Card } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import backimage from "./wave.svg";
import { makeStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import About from "../AboutUs/About";
import { useHistory } from "react-router-dom";
import homeimage from "./../../assets/Recruitment.png";
import logo from "./../../assets/logo/selfless_high.png";
import text from "../../main";
import Testimonial from "../Testimonial/Testimonial";
import { Button } from "@material-ui/core";
import WhatWeDo from "../WhatWeDo/WhatWeDo";
// import { Button } from "@material-ui/core";
// import Testimonial from "../Testimonial/Testimonial";

const useStyles = makeStyles((theme) => ({
  // root: {
  //   padding: theme.spacing(1),
  //   [theme.breakpoints.down("sm")]: {
  //     marginTop: "50px",
  //   },
  //   [theme.breakpoints.up("md")]: {
  //     marginTop: "60px",
  //   },
  //   [theme.breakpoints.up("lg")]: {
  //     marginTop: "60px",
  //   },
  // },
  mainText: {
    color: "#2C3335",
    fontFamily: "cursive",
    textShadow: "2px 2px 5px #1ba67b",
    border: "#0bdd9c",
    // textAlign: "center",
    // marginTop: "20px",
    [theme.breakpoints.up("xs")]: {
      fontSize: "3em",
      // color: 'green'
    },

    [theme.breakpoints.up("sm")]: {
      fontSize: "3em",
      // color: 'blue'
    },
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: "4em",
      // color: 'red'
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "5em",
    },
  },
}));

function Home({ setValue, testinomial_data }) {
  const classes = useStyles();
  const history = useHistory();
  const F_Walkin = useCallback(() => history.push("/fresherswalkin"), [
    history,
  ]);
  const E_Walkin = useCallback(() => history.push("/experiencewalkin"), [
    history,
  ]);

  //  openTestinomial (){
  //   <Link to="/testimonial" className="NavLink">
  //     <Testimonial />
  //   </Link>;
  // };

  useEffect(() => {
    setValue(0);
  }, []);

  return (
    <>
      <Grid
        container
        style={{
          marginBottom: "90px",
          // backgroundImage: `url(${logo})`,
          // backgroundRepeat: "no-repeat",
          // backgroundSize: "500px 500px",
          // backgroundPosition: "center",
        }}
      >
        <Grid
          xs={12}
          sm={12}
          md={6}
          lg={6}
          item
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          <div>
            <Typography className={classes.mainText}>
              {text.homepageText}
            </Typography>
          </div>
          <div
            style={{
              color: "rgb(44 51 53 / 78%)",
              backgroundColor: "rgb(218 224 226 / 26%)",
              width: "70%",
              fontSize: "1.5rem",
              textAlign: "center",
              borderRadius: "30px",
              // padding: "7px",
              marginTop: "16px",
            }}
          >
            {text.hintText} 🌈
          </div>
        </Grid>
        <Grid
          xs={12}
          sm={12}
          md={6}
          lg={6}
          item
          style={{
            height: "95vh",
            width: "100%",
            backgroundImage: `url(${homeimage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></Grid>
      </Grid>

      <WhatWeDo />
      <Testimonial testinomial_data={testinomial_data} />
      <div>
        {/* <Button variant="contained" color="success">
          VIEW MORE
        </Button> */}
        <Link to="/testinomial" className="NavLink">
          {/* <Button
            variant="contained"
            color="primary"
            style={{ backgroundColor: "green" }}
            // onClick={openTestinomial}
          >
            VIEW MORE
          </Button> */}
          <button
            style={{
              width: "130px",
              height: "50px",
              margin: "10px",
              background: "#0bdd9c",
              border: "2px solid #1ba67b",
              color: "white",
              borderRadius: "4px",
              fontSize: "1rem",
            }}
          >
            VIEW MORE ➜
          </button>
        </Link>
      </div>
    </>
  );
}

export default Home;
