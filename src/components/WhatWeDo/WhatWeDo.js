import React, { useCallback, useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
// import { Button, Card } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
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
import { Button, Paper } from "@material-ui/core";
import "./WhatWeDo.css";
const WhatWeDo = () => {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          color: "rgb(0 144 99)",
          marginTop: "10px",
        }}
      >
        What We Do
      </h1>
      <h2 style={{ textAlign: "center", color: "rgb(0 144 99)" }}>
        We help students to get their DREAM JOB in 3 simple steps
      </h2>
      <br />
      <br />

      <Grid
        container
        style={{
          minHeight: "70vh",
          justifyContent: "center",
          marginBottom: "90px",
        }}
      >
        <Grid item className="WhatWeDoGrid" lg={4} md={4} sm={12} xs={12}>
          <a
            href="https://api.whatsapp.com/send?phone=919955460028&text=Hello%21%20SelflessFamily%20Hope%20you%20are%20doing%20well. Can%20you%20please%20help%20me ?"
            style={{ textDecoration: "none" }}
          >
            <Paper className="WhatWeDoPaper">
              <div className="NumberCount">1.</div>
              <div className="StepDetails">
                JOIN SELFLESS FAMILY
                <br />
                <span style={{ fontSize: "0.8rem" }}>Click To Join ➜</span>
              </div>
            </Paper>
          </a>
        </Grid>
        <Grid item className="WhatWeDoGrid" lg={4} md={4} sm={12} xs={12}>
          <Paper className="WhatWeDoPaper">
            <div className="NumberCount">2.</div>
            <div className="StepDetails">FOLLOW THE INSTRUCTIONS</div>
          </Paper>
        </Grid>
        <Grid item className="WhatWeDoGrid" lg={4} md={4} sm={12} xs={12}>
          <Paper className="WhatWeDoPaper">
            <div className="NumberCount">3.</div>
            <div className="StepDetails">
              HAVE PATIENCE & BELIEF IN YOURSELF
            </div>
          </Paper>
        </Grid>
        <Link to="/documents" style={{ textDecoration: "none" }}>
          <Button
            style={{
              minWidth: "100px",
              height: "60px",
              margin: "10px",
              background: "#0bdd9c",
              border: "2px solid #1ba67b",
              color: "white",
              borderRadius: "4px",
              marginTop: "70px",
              fontSize: "15px",
              fontWeight: "bolder",
            }}
          >
            Check out our huge collection of Documents ➜
          </Button>
        </Link>
      </Grid>
    </>
  );
};

export default WhatWeDo;
