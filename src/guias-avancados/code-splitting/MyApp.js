import React, { Suspense } from 'react';
import Titulo from '../../utils-components/Titulo';

// Atualmente lazy apenas funciona com 'export default'
const AlgumComponent = React.lazy(() => import('./MyComponent'));

export function MyApp() {
    return (<div>
        <Titulo title="MyApp.js" component={<>
            {/* enquanto carrega aprensenta outro conteúdo. */}
            < Suspense fallback={<div style={{ height: '700px', backgroundColor: 'red' }}>Carregando...</div>}>
                <h3>Utiliza modulos, React.lazy, React.Suspense, importação assincrona</h3>
                <p>A tela pisca ao recarregar com 'tecla f5'
                    Mas ao alterar o conteúdo não pisca.</p>
                <AlgumComponent />
                <AlgumComponent />
            </Suspense>
        </>} />
    </div>
    );
}
