import React, { useEffect, useRef } from "react";
import { ISelectProps } from "../interfaces";
import "./../style/blocks/select.scss";
import { SelectDefaultProps } from "./defaultProps";

export const Select: React.FunctionComponent<ISelectProps> = (props) => {
  Select.defaultProps = SelectDefaultProps;

  const selectRef = useRef<HTMLSelectElement>(null);

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    props.handlerChange({ id: props.id, value: e.target.value });
  };

  useEffect(() => {
    if (props.initialValue) {
      selectRef.current!.value = props.initialValue;
      return;
    }
    props.handlerChange({
      id: props.id,
      value: props.initialValue || props.items[0],
    });
  }, []);

  return (
    <div className={`select ${props.class}`}>
      <label className="headingInput">{props.name}</label>
      <select
        className="input"
        ref={selectRef}
        onChange={onChange}
        name={props.id}
      >
        {props.items.map((item, i) => (
          <option key={i} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
