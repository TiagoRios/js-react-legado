import React from "react";
import { ComponentRenderizaFancyButton }  from "../dom-components/FancyButton";

function umlogProps(WrappedComponent) {
  class LogProps extends React.Component {
    componentDidUpdate(prevProps) {
      console.log('props antigas:', prevProps);
      console.log('novas props:', this.props);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return LogProps;
}

export default umlogProps(ComponentRenderizaFancyButton)