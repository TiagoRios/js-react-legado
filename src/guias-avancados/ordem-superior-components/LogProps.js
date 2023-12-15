import React from "react";
import FancyButtonForwardRef from "../forward-refs/dom-components/FancyButtonForwardRef";

// Não é componente.
function umlogProps(WrappedComponent) {
  class LogProps extends React.Component {
    componentDidUpdate(prevProps) {
      console.log('props antigas:', prevProps);
      console.log('novas props:', this.props);
    }

    render() {
      return <WrappedComponent {...this.props} >Ordem superior</WrappedComponent>;
    }
  }

  return LogProps;
}

export default umlogProps(FancyButtonForwardRef);