import Header from "../../utils-components/Header";
import LoginControl from "./LoginControl";
import Mailbox from "./Mailbox";
import Page from "./Page";
import TestarSeAprendi from "./TestarSeAprendi";

const AllCondicional = () => {
    return (
        <div style={{ width: "97%" }}>
            <Header title="LoginControl.js" />
            <LoginControl />

            <Header title="MailBox.js" />
            <Mailbox unreadMessages={["msg1", "msg2", "outraMsg"]} />

            <Header title="Page.js" />
            <Page />

            <Header title="TestarSeAprendi.js" />
            <TestarSeAprendi />
        </div>
    )
}

export default AllCondicional;