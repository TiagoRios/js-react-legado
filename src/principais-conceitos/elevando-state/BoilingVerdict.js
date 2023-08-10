/**
 * Função que verifica se a temperatura é capaz de ferver a água
 * @returns um compenente paragrafo com a resposta se ferve ou não.
 */
export default function BoilingVerdict({ scale, temperature }) {

  if ((scale === 'celsius' && temperature >= 100) ||
    (scale === 'fahrenheit' && temperature >= 212)) {
    return <p style={{color:"red"}}>A água ferveria.</p>;
  } else {
    return <p style={{color:"yellow"}}>A água não ferveria.</p>;
  }
}