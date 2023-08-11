import HeaderH2 from "./HeaderH2";

export default function Titulo({ title, component }) {
    return (<>
        <HeaderH2 color="lightgreen">{title}</HeaderH2>
        {component}
        <hr />
    </>)
}