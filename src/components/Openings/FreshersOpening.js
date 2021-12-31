import React, { useEffect, useState } from "react";
import SharedAccordian from "./SharedAccordian";
import axios from "axios";
export default function FreshersOpening({ setValue }) {
  const [job, setJob] = useState([]);
  useEffect(() => {
    setValue(1);
  }, []);
  useEffect(() => {
    axios
      .get(
        "https://gist.githubusercontent.com/dharmeshh14/1e19889b307b00e4e94be29be32b1091/raw/fresheropening.json"
      )
      .then((response) => setJob(response.data))
      .catch((e) => console.error(e));
  }, []);
  return <SharedAccordian data={job} />;
}
