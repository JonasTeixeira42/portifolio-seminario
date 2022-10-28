import React from "react";

import "./styles.css";

const Heading = ({ children, id = "" }) => (
  <div className="heading-container">
    <h2 id={id} className="heading">
      {children}
    </h2>
  </div>
);

export default Heading;
