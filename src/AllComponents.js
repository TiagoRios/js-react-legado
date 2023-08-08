import React from "react";

import AppReact from "./app-react-inicial/AppReact";
import { ConsumindoApiRest } from "./consumindo-api-rest/ConsumindoApiRest";
import { AllPrincipaisConceitos } from "./principais-conceitos/AllPrincipaisConceitos";

export class AllComponents extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<>
            <AppReact />
            <ConsumindoApiRest />
            <AllPrincipaisConceitos />
            {/* <AllGuiasAvancados /> */}
        </>)
    }
}