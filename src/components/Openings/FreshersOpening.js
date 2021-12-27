import React, { useEffect, useState } from "react";
import SharedAccordian from "./SharedAccordian";
import job from "./job";
import axios from "axios";
export default function FreshersOpening({ setValue }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    setValue(1);
  }, []);
  useEffect(() => {
    axios
      .get("")
      .then((response) => setData(response))
      .catch((e) => console.error(e));
  }, []);
  return <SharedAccordian data={job} />;
}
