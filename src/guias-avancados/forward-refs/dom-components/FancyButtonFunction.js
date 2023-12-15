// props.ref não existem, devo usar uma palavra diferente de 'ref'
export default function FancyButtonFunction({ enunciado, children, referencia }) {
  return (
    <div>
      <p>{enunciado}</p>

      <button
        ref={referencia}
        style={{
          backgroundColor: 'green',
          border: '12px solid red',
          color: 'white',
          fontSize: '50px',
        }}
      >
        {children}
      </button>
    </div>
  )
}
