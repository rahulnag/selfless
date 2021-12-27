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

import { aboutus } from "./about_data";
import Loader from "../Loader/Loader";

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

  useEffect(() => {
    setValue(2);
  }, []);

  return (
    <>
      <Grid container spacing={1}>
        {aboutus.length > 0 ? (
          aboutus.map((elems) => {
            return (
              <Grid
                item
                lg={3}
                md={4}
                sm={12}
                xs={12}
                style={{ height: "550px", padding: "13px" }}
              >
                <Card className={classes.root}>
                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe" className={classes.avatar}>
                        R
                      </Avatar>
                    }
                    title={aboutus[0].name}
                    subheader="September 14, 2016"
                  />
                  <CardMedia
                    className={classes.media}
                    image={elems.image_url}
                    title="Paella dish"
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {elems.name}
                      {/* This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like. */}
                    </Typography>
                  </CardContent>
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
