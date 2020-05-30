import React from "react";
import "../style/blocks/button.scss";
import { IButtonProps } from "../interfaces";

export const Button: React.FunctionComponent<IButtonProps> = (props) => {
  const handlerClick = () => props.handlerChange();

  return (
    <button
      onClick={handlerClick}
      className={`button ${props.class}`}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
};
