import React, { useEffect, useState } from "react";
import job from "./job";
import axios from "axios";
import SharedAccordian from "./SharedAccordian";

export default function ExpOpening({ setValue }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    setValue(1);
  }, []);
  useEffect(() => {
    axios
      .get("")
      .then((response) => setData(response.data))
      .catch((e) => console.error(e));
  }, []);
  return <SharedAccordian data={job} />;
}
