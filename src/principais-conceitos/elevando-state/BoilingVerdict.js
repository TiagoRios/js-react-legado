export default function BoilingVerdict({ scale, temperature }) {
  return isAguaFerve(scale, temperature) ?
    <p style={{ color: "red" }}>A água ferveria.</p> :
    <p style={{ color: "yellow" }}>A água não ferveria.</p>;
}

function isAguaFerve(scale, temperature) {
  if (scale === 'celsius' && temperature >= 100) {
    return true;
  } else if (scale === 'fahrenheit' && temperature >= 212) {
    return true;
  }

  return false;
}