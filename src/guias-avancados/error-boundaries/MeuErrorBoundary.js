import React from "react";
import ErrorInfo from "../../utils-components/ErrorInfo";

export default class MeuErrorBoundary extends React.Component {
    constructor(props) {
        super(props);

        this.displayName = 'novoNome-MeuErrorBoundary';

        this.state = {
            error: null,
            errorInfo: null
        };
    }

    // escolha 1:
    static getDerivedStateFromError(error) {
        return {
            error: error,
            errorInfo: error.stack,
        };
    }

    // escolha 2:
    // componentDidCatch(error, errorInfo) {
    //     this.setState({
    //         error: error,
    //         errorInfo: errorInfo.componentStack,
    //     })
    // }

    render() {
        if (this.state.errorInfo) {
            return (
                <ErrorInfo
                    error={this.state.error}
                    errorInfo={this.state.errorInfo}
                />
            )
        }

        return this.props.children;
    }
}