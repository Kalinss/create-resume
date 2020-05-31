import React, { useState } from "react";
import { IEntryFieldProps } from "../interfaces";
import "./../style/blocks/entryField.scss";
import { getErrorValidation } from "../utils/validation";
export const EntryField: React.FunctionComponent<IEntryFieldProps> = (
  props
) => {
  const [error, setError] = useState("");
  const [positive, setPositive] = useState(false);

  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (props.validationFunction && props.required) {
      const codeError = props.validationFunction(e.target.value);
      if (codeError) {
        setError(getErrorValidation(codeError));
        setPositive(false);
      } else {
        setError("");
        setPositive(true);
      }
    } else {
      return;
    }
  };
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
      <div className="entryField__wrapper">
        <input
          className={`input entryField__input 
          ${error ? "error" : ""} 
          ${positive ? "positive" : ""}
            `}
          name={props.name}
          id={props.id}
          placeholder={props.placeholder}
          onBlur={onBlur}
          onChange={(e) => {
            onChange(e);
          }}
          type="text"
        />
        {error && <p className="entryField__error">{error}</p>}
      </div>
    </div>
  );
};
