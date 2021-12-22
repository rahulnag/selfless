import React, { useEffect } from "react";

import { documents } from "./documents";
import "./Document.css";

const Document = ({ setValue }) => {
  useEffect(() => {
    setValue(3);
  }, []);

  return (
    <div>
      {documents.length > 0 ? (
        documents.map((e) => {
          return <button className="CourseLink">{e.coursename}</button>;
        })
      ) : (
        <h2>loading...</h2>
      )}
    </div>
  );
};

export default Document;
