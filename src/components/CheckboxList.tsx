import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import { ICheckboxlistProps } from "../interfaces";
import { CheckboxListDefaultProps } from "./defaultProps";
import "./../style/blocks/checkboxList.scss";

export const CheckboxList: React.FunctionComponent<ICheckboxlistProps> = (
  props
) => {
  CheckboxList.defaultProps = CheckboxListDefaultProps;

  const checkedArray = props.initialValue!.split(",");
  const [checkboxList, setCheckboxList] = useState<string[]>([]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setCheckboxList([...checkboxList, e.target.id]);
    } else {
      setCheckboxList(checkboxList.filter((item) => item !== e.target.id));
    }
  };

  useEffect(() => {
    props.handlerChange({
      id: props.id,
      value: checkboxList.join(",").trim(),
    });
  }, [checkboxList]);

  useEffect(() => {
    if (props.initialValue) {
      setCheckboxList(props.initialValue.split(","));
    }
  }, []);

  return (
    <div className={`checkboxList ${props.class || ""}`}>
      {props.items.map((item, i) => {
        return (
          <div className="checkboxList__item" key={i}>
            <input
              checked={checkedArray.some((x: string) => x === item)}
              onChange={onChange}
              type="checkbox"
              id={item}
            />
            <label className="checkboxList__itemName" htmlFor={item}>
              {item}
            </label>
          </div>
        );
      })}
    </div>
  );
};
