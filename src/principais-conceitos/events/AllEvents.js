import ExibirToggleButtons from "./Toggle";
import ExibirLoggingButtons from "./LoggingButton";
import Header from "../../utils-components/Header";

export default function AllEvents() {
    return (<>
        <Header title="ToggleButtons.js" />
        <ExibirToggleButtons />

        <Header title="LoggingButtons.js" />
        <ExibirLoggingButtons />
    </>)
}