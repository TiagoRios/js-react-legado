import React from "react";

import ClickError from "./ClickError";
import ErrorInfo from "../../utils-components/ErrorInfo";

export default class SemErrorBoundary extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            meuError: null
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        try {
            throw new ClickError('Erro de click personalizado.')
        } catch (e) {
            this.setState({ meuError: e });
        }
    }

    render() {
        if (this.state.meuError) {
            return <ErrorInfo
                error={this.state.meuError}
                errorInfo={this.state.meuError.stack}
            />
        }

        return (
            <button onClick={this.handleClick}>
                Gerar error ao click
            </button>
        )
    }
}
