import { ClickForaExemplo } from "./ClickForaExemplo";
import { ExamploDeBlur } from "./ExemploDeBlur";

export function JuntandoClickForaExemploDeBlur() {
    return (
        <div style={{backgroundColor: 'lightgray'}}>
            <h1>Problema:</h1>
            <ClickForaExemplo />
            <ClickForaExemplo />
            <ClickForaExemplo />
            <h1>Problema resolvido:</h1>
            <ExamploDeBlur />
            <ExamploDeBlur />
            <ExamploDeBlur />
            <ExamploDeBlur />
            <ExamploDeBlur />
        </div>
    )
}