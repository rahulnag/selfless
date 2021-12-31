import React, { useEffect, useState } from "react";
import axios from "axios";
import SharedAccordian from "./SharedAccordian";

export default function ExpOpening({ setValue }) {
  const [job, setJob] = useState([]);
  useEffect(() => {
    setValue(1);
  }, []);
  useEffect(() => {
    axios
      .get(
        "https://gist.githubusercontent.com/dharmeshh14/2bddbb3592bc1b988f65cf95ed9f70f3/raw/experiencedopn.json"
      )
      .then((response) => setJob(response.data))
      .catch((e) => console.error(e));
  }, []);
  return <SharedAccordian data={job} />;
}
