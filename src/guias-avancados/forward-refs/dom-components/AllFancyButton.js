import React from "react";

import FancyButtonForwardRef from "./FancyButtonForwardRef";
import FancyButtonFunction from "./FancyButtonFunction";

export function AllFancyButton(props) {
  return (
    <div>
      <FancyButtonForwardRef
        ref={React.createRef()}
        enunciado='meu enunciado.'
      >
        React.forwarRef - ref
      </FancyButtonForwardRef>

      <FancyButtonFunction
        referencia={React.createRef()}
        enunciado='meu enunciado.'
      >
        Function - props
      </FancyButtonFunction>
    </div>
  )
}