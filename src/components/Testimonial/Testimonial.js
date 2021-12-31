import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Grid from "@material-ui/core/Grid";
import Loader from "../Loader/Loader";

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 300,
    // maxHeight: 400,
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
    backgroundColor: red[500],
  },
}));

export default function Testimonial({ testimonial_data }) {
  const classes = useStyles();

  return (
    <>
      {/* <div> */}
      <h1 style={{ textAlign: "center", color: "rgb(0 144 99)" }}>
        Our Achievements
      </h1>
      <h3 style={{ textAlign: "center", color: "rgb(0 144 99)" }}>
        Since 2018, 5000+ students got placed after joining Selfless Family
      </h3>
      {/* </div> */}

      <Grid container spacing={1} style={{ marginTop: "60px" }}>
        {testimonial_data.length > 0 ? (
          testimonial_data.map((elem) => {
            return (
              <Grid
                item
                lg={3}
                md={4}
                sm={12}
                xs={12}
                style={{ height: "auto", padding: "13px" }}
              >
                <Card className={classes.root}>
                  <CardHeader
                    // avatar={
                    //   <Avatar aria-label="recipe" className={classes.avatar}>
                    //     R
                    //   </Avatar>
                    // }
                    title={elem.name}
                    subheader={elem.desc}
                  />
                  <CardMedia
                    className={classes.media}
                    image={elem.image_url}
                    title={elem.name}
                  />
                  <CardContent>
                    {/* <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      This impressive paella is a perfect party dish and a fun
                      meal to cook together with your guests. Add 1 cup of
                      frozen peas along with the mussels, if you like.
                    </Typography> */}
                  </CardContent>
                </Card>
              </Grid>
            );
          })
        ) : (
          <Loader />
        )}
      </Grid>
    </>
  );
}
