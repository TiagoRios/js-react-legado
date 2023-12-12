import './AppSplitPane.css';

export default function AppSplitPane() {
    return (
        <SplitPane
            left={<Contacts />}
            right={<Chat />}
        />
    );
}

function SplitPane({ left, right }) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">
                {left}
            </div>

            <div className="SplitPane-right">
                {right}
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