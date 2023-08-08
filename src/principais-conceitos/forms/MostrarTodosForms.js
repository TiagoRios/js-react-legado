import React from "react";
import { EssayForm } from "./EssayForm";
import { FlavorForm } from "./FlavorForm";
import { NameForm } from "./NameForm";
import { Reservation } from "./Reservation";

export class MostrarTodosForms extends React.Component {
    render() {
        return (<>
            <NameForm /><hr />
            <EssayForm /><hr />
            <FlavorForm /><hr />
            <Reservation /><hr />
        </>
        )
    }
}