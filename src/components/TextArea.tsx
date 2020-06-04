import React, { useEffect, useRef } from "react";
import { ITextAreaProps } from "../interfaces";
import { TextAreaDefaultProps } from "./defaultProps";
import "../style/blocks/textArea.scss";

const createLineFeed = (str: string) => str.replace(/(?:\r\n|\r|\n)/g, "$$$");

export const TextArea: React.FunctionComponent<ITextAreaProps> = (props) => {
  TextArea.defaultProps = TextAreaDefaultProps;

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (props.initialValue) {
      textAreaRef.current!.defaultValue = props.initialValue;
    }
  }, []);

  const onBlur = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    props.handlerChange({
      id: props.id,
      value: createLineFeed(e.target.value),
    });
  };

  return (
    <div className={`textArea ${props.class}`}>
      <p className="textArea__title headingInput">{props.title}</p>
      <textarea
        onBlur={onBlur}
        wrap="soft"
        ref={textAreaRef}
        className="textArea__input input"
      />
    </div>
  );
};
