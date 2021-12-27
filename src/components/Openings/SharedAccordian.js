import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import job from "./job";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    paddingLeft: "5%",
    paddingRight: "5%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SharedAccordian({ data }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {data.length > 0 ? (
        data.map((j) => (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <div style={{ flex: 1 }}>
                <Typography className={classes.heading}>
                  {`Company: ${j.company}`}{" "}
                </Typography>
              </div>
              <div style={{ flex: 1 }}>
                <Typography
                  className={classes.heading}
                >{`Position: ${j.position}`}</Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{j.desc}</Typography>
            </AccordionDetails>
            <button
              style={{
                float: "right",
                width: "100px",
                height: "30px",
                margin: "10px",
                background: "#0bdd9c",
                border: "2px solid #1ba67b",
                color: "white",
                borderRadius: "4px",
              }}
            >
              Click To Apply
            </button>
          </Accordion>
        ))
      ) : (
        <h3>Loading..</h3>
      )}
    </div>
  );
}
