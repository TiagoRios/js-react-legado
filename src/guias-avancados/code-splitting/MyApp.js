import React, { Suspense } from 'react';

// Atualmente lazy apenas funciona com 'export default'
const AlgumComponent = React.lazy(() => import('./MyComponent'));

export function MyApp() {
    return (<div>
        <Suspense fallback={<div style={{height:'700px', backgroundColor:'red'}}>Carregando...</div>}>
            A tela pisca ao recarregar com 'tecla f5'
            Mas ao alterar o conteúdo não pisca.
            <AlgumComponent />
            <AlgumComponent />
        </Suspense>
    </div>
    );
}
