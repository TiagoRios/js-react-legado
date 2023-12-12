import Header from "../../utils-components/Header";

import AppSplitPane from "./AppSplitPane";
import Dialog from "./Dialog";
import FancyBorder from "./FancyBorder";
import SignUpDialog from "./SignUpDialog";
import WelcomeDialog from "./WelcomeDialog";

const AllComposicaoHeranca = () => {
    return (<div style={{ width: "97%" }}>
        <Header title="AppSplitPane.js" />
        <AppSplitPane />

        <Header title="FancyBorder.js" />
        <FancyBorder color="blue">
            Componente filho
        </FancyBorder>

        <Header title="Dialog.js" />
        <Dialog message="Msg do dialogo aqui" title="título da msg">
            &lt;ComponentefilhoParaRenderizar /&gt;
        </Dialog>

        <Header title="WelcomeDialog.js" />
        <WelcomeDialog />

        <Header title="SignUpDialog.js" />
        <SignUpDialog />
    </div>)
}

export default AllComposicaoHeranca;