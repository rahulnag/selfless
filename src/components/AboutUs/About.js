import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import WhatWeDo from "../WhatWeDo/WhatWeDo";
import Loader from "../Loader/Loader";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 300,
    // maxHeight: 500,
    height: "100%",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    margin: "4px",
    borderRadius: "4px",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    // backgroundColor: red[500],
  },
}));

function About({ setValue }) {
  const classes = useStyles();
  const [aboutus, setAboutus] = useState([]);
  useEffect(() => {
    setValue(2);
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/SelflessFamily-Files/SelflessWebsiteFiles/master/AboutUs/about.json"
      )
      .then((response) => {
        setAboutus(response.data);
      })
      .catch((e) => console.error(e));
  }, []);
  return (
    <>
      <Grid container spacing={1}>
        <Grid item sm={12} xs={12} lg={12} md={12}>
          <WhatWeDo />
        </Grid>
        <Grid item sm={12} xs={12} lg={12} md={12}>
          <h1
            style={{
              textAlign: "center",
              color: "rgb(0 144 99)",
              fontSize: "50px",
            }}
          >
            Our Team <span style={{ backgroundColor: "white" }}>👨🏻‍💻</span>
          </h1>
        </Grid>

        {aboutus.length > 0 ? (
          aboutus.map((elems) => {
            return (
              <Grid
                item
                lg={3}
                md={4}
                sm={12}
                xs={12}
                style={{ height: "150px", padding: "13px" }}
                //keep heignt as 550px
              >
                <Card className={classes.root}>
                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe" className={classes.avatar}>
                        R
                      </Avatar>
                    }
                    title={elems.name}
                    subheader={elems.position}
                  />
                  {/* <CardMedia
                    className={classes.media}
                    image={elems.image_url}
                    title={elems.name}
                  /> */}
                  {/* <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {elems.desc}
                    </Typography>
                  </CardContent> */}
                </Card>
              </Grid>
            );
          })
        ) : (
          // <h2>
          <Loader />
          // </h2>
        )}
      </Grid>
    </>
  );
}

export default About;
