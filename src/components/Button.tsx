import React from "react";
import "../style/blocks/button.scss";
import { IButtonProps } from "../interfaces";
import { ButtonDefaultProps } from "./defaultProps";

export const Button: React.FunctionComponent<IButtonProps> = (props) => {
  Button.defaultProps = ButtonDefaultProps;

  return (
    <button
      onClick={props.handlerChange}
      className={`button ${props.class}`}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
};
