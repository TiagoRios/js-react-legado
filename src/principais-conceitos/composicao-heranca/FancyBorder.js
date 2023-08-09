import './FancyBorder.css';

/**
 * Não se sabe quais elementos filhos vão ser passados para o componente.
 * Então estamos usando a props especial props.children para capturar os elementos
 * fornecidos dentro do componente.
 * @returns uma div com uma borda com elementos filhos dentro dela,
 * se forem fornecidos outros elementos em seu interior.
 */
export function FancyBorder(props) {
    return (
      // A props.children dentro de uma tag <DIV>
      <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children} {/*Aqui pode vim varios elementos filhos*/}
      </div>
    );
  }