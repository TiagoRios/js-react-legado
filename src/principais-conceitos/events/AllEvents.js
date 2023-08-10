import ExibirToggleButtons from "./Toggle";
import ExibirLoggingButtons from "./LoggingButton";
import Titulo from "../../utils-components/Titulo";

export default function AllEvents() {
    return (<>
        <Titulo title="ToggleButtons" component={<ExibirToggleButtons />} />
        <Titulo title="LoggingButtons" component={<ExibirLoggingButtons />} />
    </>)
}