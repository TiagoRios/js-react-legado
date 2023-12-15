import React from "react";

import FancyButtonForwardRef from "./FancyButtonForwardRef";
import FancyButtonFunction from "./FancyButtonFunction";
import Header from "../../../utils-components/Header";

export default function AllFancyButton(props) {
  return (
    <div>
      <Header title={"FancyButtonForwardRef.js"} />
      <FancyButtonForwardRef
        ref={React.createRef()}
      >
        Botão forwarRef
      </FancyButtonForwardRef>

      <Header title={"FancyButtonFunction.js"} />
      <FancyButtonFunction
        referencia={React.createRef()}
      >
        Botão Function
      </FancyButtonFunction>
    </div>
  )
}