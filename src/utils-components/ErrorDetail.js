import React from "react";
import Details from "./Details";

export default function ErrorDetail({ error, errorInfo }) {
  return (
    <Details
      style={{
        whiteSpace: 'pre-wrap',
        fontSize: '1.5em'
      }}
      summary={"Detalhes do erro"}
    >
      {error && error.toString()}
      <br /><br />
      {errorInfo}
    </Details >
  )
}
