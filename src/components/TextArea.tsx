import React, { useEffect, useRef } from "react";
import { ITextAreaProps } from "../interfaces";
import "../style/blocks/textArea.scss";
import {TextAreaDefaultProps} from "./defaultProps";
export const TextArea: React.FunctionComponent<ITextAreaProps> = (props) => {
  TextArea.defaultProps = TextAreaDefaultProps;

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (props.initialValue) {
      textAreaRef.current!.defaultValue = props.initialValue;
    }
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    props.handlerChange({ id: props.id, value: e.target.value });
  };

  return (
    <div className={`textArea ${props.class}`}>
      <p className="textArea__title headingInput">{props.title}</p>
      <textarea
        ref={textAreaRef}
        onChange={onChange}
        className="textArea__input input"
      />
    </div>
  );
};
