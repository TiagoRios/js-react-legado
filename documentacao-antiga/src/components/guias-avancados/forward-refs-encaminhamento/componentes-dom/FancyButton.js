import React from 'react';

/* 
Essa é uma das maneiras de fazer o encaminhado de refs.
Componente FancyButton criado por React.forwardRef()
*/
const FancyButton = React.forwardRef((props, ref) => (
    <div>
        <p>{props.enunciado}</p>
        <button ref={ref} style={{ fontSize: '50px', backgroundColor: 'blue', color: 'white', border: '12px solid red' }}>
            {props.children}
        </button>
    </div>
));

/* Warning: 
// FancyButtonNormal: `ref`  não é um prop.
// Tentar acessá-la, ira resultar em 'undefined' como retorno. 
// Se você precisa acessar o mesmo valor com o componente filho.
// você deve passar ela como uma prop diferente.
// Não posso utilizar props.ref, devo trocar a palavra 'ref' então vai funcionar perfeitamente
*/
export function FancyButtonNormal(props) {
    return (
        <div>
            <p>{props.enunciado}</p>
            {/* substituir o nome da prop 'ref' por outro nome */}
            <button ref={props.referencia} style={{ fontSize: '50px', backgroundColor: 'green', color: 'white', border: '12px solid red' }}>
                {props.children}
            </button>
        </div>
    )
}

export function ComponentRenderizaFancyButton(props) {
    return (
        <div>
            <FancyButton ref={React.createRef()} enunciado='algum enunciado definido aqui.'>BTN - Usando React.forwarRef</FancyButton>
            <FancyButtonNormal referencia={React.createRef()} enunciado='algum enunciado definido aqui.'>BTN - Usando props</FancyButtonNormal>
        </div>
    )
}

