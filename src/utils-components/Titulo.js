export default function Titulo({ title, component }) {
    return (<>
        <h2>{title}</h2>
        {component}
        <hr />
    </>)
}