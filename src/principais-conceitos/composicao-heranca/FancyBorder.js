import React from "react";

import './FancyBorder.css';

export default function FancyBorder({ color, children }) {
  return (
    <div className={'FancyBorder FancyBorder-' + color}>
      {children}
    </div>
  );
}