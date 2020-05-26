import React from "react";
import { IEntryFieldProps } from "../interfaces";
import "./../style/blocks/entryField.scss";
export const EntryField: React.FunctionComponent<IEntryFieldProps> = (
  props
) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.handlerChange({
      id: props.id,
      value: e.target.value,
    });
  };

  return (
    <div className={`entryField ${props.class || ""}`}>
      <label className="entryField__label label" id={props.id}>
        {props.title && (
          <span className="entryField__title">{props.title}</span>
        )}
        {props.required && (
          <span className="entryField__require"> (обязательно) </span>
        )}
      </label>
      <input
        className="input entryField__input"
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
        onChange={(e) => {
          onChange(e);
        }}
        type="text"
      />
    </div>
  );
};
