import React from 'react';
import ErrorInfo from '../../../utils-components/ErrorInfo';

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            errorInfo: null,
        };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo.componentStack,
        })
    }

    render() {
        if (this.state.errorInfo) {
            return (
                <ErrorInfo
                    error={this.state.error}
                    errorInfo={this.state.errorInfo}
                />
            );
        }

        return this.props.children;
    }
}
