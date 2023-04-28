/**
 * Função que verifica se a temperatura é capaz de ferver a água
 * @returns um compenente paragrafo com a resposta se ferve ou não.
 */
export function BoilingVerdict(props) {

  if ((props.scale === 'celsius' && props.temperature >= 100) || (props.scale === 'fahrenheit' && props.temperature >= 212)) {
    return <p>A água ferveria.</p>;
  }else{
    return <p>A água não ferveria.</p>;
  }
}