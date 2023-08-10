import Titulo from "../../utils-components/Titulo";
import { NameForm } from "./NameForm";
import { EssayForm } from "./EssayForm";
import { FlavorForm } from "./FlavorForm";
import { Reservation } from "./Reservation";

export default function AllForms() {
    return (<>
        <Titulo title="NameForm.js" component={<NameForm />} />
        <Titulo title="EssayForm.js" component={<EssayForm />} />
        <Titulo title="FlavorForm.js" component={<FlavorForm />} />
        <Titulo title="Reservation.js" component={<Reservation />} />
    </>)
}