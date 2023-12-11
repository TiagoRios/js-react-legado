import EssayForm from "./EssayForm";
import FlavorForm from "./FlavorForm";
import Header from "../../utils-components/Header";
import NameForm from "./NameForm";
import Reservation from "./Reservation";

export default function AllForms() {
    return (<>
        <Header title="NameForm.js" />
        <NameForm />

        <Header title="EssayForm.js" />
        <EssayForm />

        <Header title="FlavorForm.js" />
        <FlavorForm />

        <Header title="Reservation.js" />
        <Reservation />
    </>)
}