import HeaderH2 from "./HeaderH2";

export default function Header({ title, level = 2 }) {
    switch (level) {
        case 2:
            return (
                <HeaderH2 color="lightgreen">
                    {title}
                </HeaderH2>
            )
        default:
            return <h1>{title}</h1>
    }
}