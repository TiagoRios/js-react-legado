import React from "react";

import './Dialog.css';
import FancyBorder from "./FancyBorder";

export default function Dialog({ children, message, title }) {
  return (
    <FancyBorder color="hotpink"> {/*cores hotpink ou blue */}
      <h1 className="Dialog-title">
        {title}
      </h1>

      <p className="Dialog-message">
        {message}
      </p>

      {children}
    </FancyBorder>
  );
}