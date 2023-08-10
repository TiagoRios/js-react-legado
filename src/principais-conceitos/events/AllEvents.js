import ExibirToggleButtons from "./Toggle";
import ExibirLoggingButtons from "./LoggingButton";
import Titulo from "../../utils-components/Titulo";

export default function AllEvents() {
    return (<>
        <Titulo title="ToggleButtons.js" component={<ExibirToggleButtons />} />
        <Titulo title="LoggingButtons.js" component={<ExibirLoggingButtons />} />
    </>)
}