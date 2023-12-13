import HeaderH2 from "./HeaderH2";

export default function Header({ title, level }) {
    switch (level) {
        case 1:
            return (
                <h1 style={{ color: "yellow" }}>
                    {title}
                </h1>
            )
        case 2:
            return (
                <HeaderH2 color="orange">
                    {title}
                </HeaderH2>
            )
        case 3:
            return (
                <h3 style={{ color: "magenta" }}>
                    {title}
                </h3>
            )
        default:
            return (
                <HeaderH2 color="orange">
                    {title}
                </HeaderH2>
            )
    }
}