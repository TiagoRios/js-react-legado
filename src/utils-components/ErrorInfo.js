import React from "react";

import ErrorDetail from "./ErrorDetail";
import Header from "./Header";

export default function ErrorInfo({ error, errorInfo }) {
  return (
    <div style={{ margin: '0 auto', width: '60%' }}>
      <Header
        level={1}
        style={{ fontSize: '2em' }}
        title='Ops! Algo deu errado.'
      /><br />

      <ErrorDetail error={error} errorInfo={errorInfo} />
    </div>
  )
}
