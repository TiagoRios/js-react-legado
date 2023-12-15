import React from "react";

import BuggyCounter from "./BuggyCounter";
import MeuErrorBoundary from "./MeuErrorBoundary";

export default function MeuErrorBoundaryApp() {
  return (
    <MeuErrorBoundary>
      <p><b>Cópia do componente ErrorBoundaryApp.js</b></p>

      <BuggyCounter />
    </MeuErrorBoundary>
  );
}
