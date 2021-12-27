import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SharedAccordian from "../Openings/SharedAccordian";
import job from "../Openings/job";
export default function ExpWalkin({ setValue }) {
  useEffect(() => {
    setValue(1);
  }, []);
  // return <SharedAccordian data={job} />;
  return (
    <h3 style={{ textAlign: "center" }}>
      Due to COVID, Lot of companies are not conducting Walkin Interviews,
      Please check the Experienced Openings and Apply from there
    </h3>
  );
}
