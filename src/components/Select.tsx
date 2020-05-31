import React, { useEffect } from "react";
import { ISelectProps } from "../interfaces";
import "./../style/blocks/select.scss";
export const Select: React.FunctionComponent<ISelectProps> = (props) => {
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    props.handlerChange({ id: props.id, value: e.target.value });
  };
  useEffect(() => {
    props.handlerChange({ id: props.id, value: props.items[0] });
  }, []);
  return (
    <div className={`select ${props.class || ""}`}>
      <label className="headingInput">{props.name}</label>
      <select className="input" onChange={onChange} name={props.id}>
        {props.items.map((item, i) => (
          <option key={i} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
