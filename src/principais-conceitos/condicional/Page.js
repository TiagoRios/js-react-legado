import React from "react";

// esconder o componente ainda que ele tenha sido renderizado por outro componente.u
function WarningBanner(props) {
    if (!props.warn) { return null; }

    return (
        <div style={{ backgroundColor: 'orange', border: '5px solid black' }}>
            <h4>Component WarningBanner</h4>

            <p>Warning!</p>
        </div>
    );
}

export default class Page extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showWarning: true
        };

        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(state => ({
            showWarning: !state.showWarning
        }));
    }

    render() {
        return (
            <div style={{ border: '5px solid blue' }}>
                <WarningBanner warn={this.state.showWarning} />

                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide warning' : 'Show warning'}
                </button>
            </div>
        );
    }
}