import React, { useEffect } from "react";

const Document = ({ setValue }) => {
  useEffect(() => {
    setValue(3);
  }, []);

  return (
    <div>
      <h1>Dcos</h1>
    </div>
  );
};

export default Document;
