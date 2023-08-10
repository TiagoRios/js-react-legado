import './AppSplitPane.css';

export function AppSplitPane() {
    return (
        <SplitPane
            left={
                <Contacts />
            }
            right={
                <Chat />
            } />
    );
}

function SplitPane(props) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    );
}

function Contacts() {
    return <div className="Contacts"><p>Area Contatos</p></div>;
}

function Chat() {
    return <div className="Chat"><p>Area Chat</p></div>;
}