import Titulo from "../../utils-components/Titulo";

import { FancyBorder } from "./FancyBorder";
import { AppSplitPane } from "./AppSplitPane";

import { Dialog } from "./Dialog";
import { SignUpDialog } from "./SignUpDialog";
import { WelcomeDialog } from "./WelcomeDialog";

const AllComposicaoHeranca = () => {
    return (<div style={{ width: "97%" }}>
        <Titulo title="AppSplitPane.js"
            component={<AppSplitPane />} />
        
        <Titulo title="FancyBorder.js"
            component={<FancyBorder color="blue">Componente filho</FancyBorder>} />
        
        <Titulo title="Dialog.js"
            component={<Dialog title="título da msg" message="Msg do dialogo aqui">&lt;ComponentefilhoParaRenderizar /&gt; </Dialog>} />
        
        <Titulo title="WelcomeDialog.js"
            component={<WelcomeDialog />} />
        
        <Titulo title="SignUpDialog.js"
            component={<SignUpDialog />} />

    </div>)
}

export default AllComposicaoHeranca;