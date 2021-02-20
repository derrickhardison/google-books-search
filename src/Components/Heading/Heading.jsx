import React from "react";
import "./Heading.css";

const Heading = () => {
  return (
    <header>
      <h1 className="display-3">
        <strong>(React) Google Books Search</strong>
      </h1>
      <h1 className="display-6 text-muted">
        Search for and Save Books of Interest
      </h1>
    </header>
  );
};

export default Heading;
