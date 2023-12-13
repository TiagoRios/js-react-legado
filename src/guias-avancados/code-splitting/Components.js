// Para utilizar com React.lazy o componente precisa ser definido como 'default'
export function ComponentA() {
    return (
        <div style={{ backgroundColor: 'black', color: 'white', fontSize: '50px' }}>
            Component A.<br />
        </div>
    )
}

export function ComponentB() {
    return (
        <div style={{ backgroundColor: 'blue', color: 'white', fontSize: '30px' }}>
            Component B.
        </div>
    )
}