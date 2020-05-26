import React from "react";
import { IEntryFieldProps } from "../../interfaces";

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
    <div className="entryField">
      <label id={props.id}>
        {props.name}
        {props.required && <span>(обязательно)</span>}
      </label>
      <input
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

