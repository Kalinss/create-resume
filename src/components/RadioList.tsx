import React from "react";
import { IRadioList } from "../interfaces";
import "./../style/blocks/radioList.scss";
export const RadioList: React.FunctionComponent<IRadioList> = (props) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.handlerChange({ id: props.id, value: e.target.id });
  };
  return (
    <div className={`radioList ${props.class || ""}`}>
      <p className="entryField__title">{props.title}</p>
      <form>
        {props.items.map((item, i) => {
          return (
            <div key={i} className="radioList__item">
              <label htmlFor={item}>
                <input
                  onChange={onChange}
                  id={item}
                  name={props.name}
                  type="radio"
                />
                {item}
              </label>
            </div>
          );
        })}
      </form>
    </div>
  );
};
