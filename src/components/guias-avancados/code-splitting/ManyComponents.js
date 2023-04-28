// Para utilizar com React.lazy o componente precisa ser definido como 'default'
export function MyComponentNormal() {
    return (
        <div style={{ backgroundColor: 'black', color: 'white', fontSize: '30px' }}>
            Olá, eu sou o conteúdo de uma Div !
        </div>
    )
}
export function MyComponentNaoUsado() {
    return (
        <>
            <div style={{ backgroundColor: 'black', color: 'white', fontSize: '30px' }}>
                aew , eu sou o conteúdo de uma Div !
            </div>
        </>
    )
}