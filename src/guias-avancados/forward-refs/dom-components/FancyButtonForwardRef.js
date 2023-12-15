import React from 'react';

import estilos from "./estilos";

const FancyButtonForwardRef = React.forwardRef((props, ref) => (
    <div>
        <button
            ref={ref}
            style={estilos}
        >
            {props.children}
        </button>
    </div>
));

export default FancyButtonForwardRef;


