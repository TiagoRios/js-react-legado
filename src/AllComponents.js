import React from "react";

import Details from "./utils-components/Details";
import AppReact from "./app-react-inicial/AppReact";
import ConsumindoApiRest from "./consumindo-api-rest/ConsumindoApiRest";
import AllGuiasAvancados from "./guias-avancados/AllGuiasAvancados";
import AllPrincipaisConceitos from "./principais-conceitos/AllPrincipaisConceitos";

export class AllComponents extends React.Component {
    render() {
        return (<>
            <Details summary="App React Inicial"><AppReact /></Details>
            <Details summary="Consumindo Api Rest React"><ConsumindoApiRest /></Details>
            <Details summary="Principais conceitos"><AllPrincipaisConceitos /></Details>
            <Details summary="Guias avançados"><AllGuiasAvancados /></Details>
        </>)
    }
}