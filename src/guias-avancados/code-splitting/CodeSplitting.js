import React, { Suspense } from 'react';
import Header from '../../utils-components/Header';

import wait from './wait';

// Atualmente lazy apenas funciona com 'export default'
// const ComponentA = React.lazy(() => import('./ComponentDefault'));
const ComponentA = React.lazy(() => wait(3000).then(() => import('./ComponentDefault')));

export default function CodeSplitting() {
    return (<div>
        <Header title="CodeSplitting.js" />

        <Suspense fallback={<FallbackCustom />}>
            <Header title="Utiliza modulos default, React.lazy, React.Suspense, importação assincrona" level={3} />
            <ComponentA />
        </Suspense>
    </div >
    );
}

function FallbackCustom() {
    return <div style={{ height: '200px', backgroundColor: 'red' }}>
        Carregando...
    </div>
}