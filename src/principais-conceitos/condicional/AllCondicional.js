import Titulo from "../../utils-components/Titulo";

import LoginControl from "./LoginControl";
import Mailbox from "./Mailbox";
import Page from "./Page";
import TestarSeAprendi from "./TestarSeAprendi";

const AllCondicional = () => {
    return (<div style={{ width: "97%" }}>
        <Titulo title="LoginControl.js" component={<LoginControl />} />
        <Titulo title="MailBox.js" component={<Mailbox unreadMessages={["msg1", "msg2", "outraMsg"]} />} />
        <Titulo title="Page.js" component={<Page />} />
        <Titulo title="TestarSeAprendi.js" component={<TestarSeAprendi />} />
    </div>)
}

export default AllCondicional;