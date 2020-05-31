import React from "react";
import { ITextAreaProps } from "../interfaces";
import "../style/blocks/textArea.scss";
export const TextArea: React.FunctionComponent<ITextAreaProps> = (props) => {
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    props.handlerChange({ id: props.id, value: e.target.value });
  };
  return (
    <div className={`textArea ${props.class || ""}`}>
      <p className="textArea__title headingInput">{props.title}</p>
      <textarea onChange={onChange} className="textArea__input input" />
    </div>
  );
};
