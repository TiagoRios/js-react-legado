import React from 'react';

const FancyButtonForwardRef = React.forwardRef((props, ref) => (
    <div>
        <p>{props.enunciado}</p>

        <button
            ref={ref}
            style={{
                backgroundColor: 'blue',
                border: '12px solid red',
                color: 'white',
                fontSize: '50px',
            }}
        >
            {props.children}
        </button>
    </div>
));

export default FancyButtonForwardRef;


