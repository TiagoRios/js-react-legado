import { FancyBorder } from "./FancyBorder";
import './Dialog.css';

// Um caso de especialização que resolve com composição.

export function Dialog(props) {
  return (
    <FancyBorder color="hotpink"> {/*cores hotpink ou blue */} 
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
  );
}