import React from "react";
import cx from "classnames";

import "./styles.css";

const Heading = ({ lineBottom = false, children, id = "" }) => (
  <div className={cx({ center: lineBottom })}>
    <h2 id={id} className={cx({ border: lineBottom })}>
      {children}
    </h2>
  </div>
);

export default Heading;
