import React, { useContext, useState, useRef, useEffect } from "react";
import { EntryField } from "./EntryField";
import { ResumeContext } from "../store/store";
import { IWantedPositionProps } from "../interfaces";
import "./../style/blocks/wantedProsition.scss";
import { WantedPositionDefaultProps } from "./defaultProps";

export const WantedPosition: React.FunctionComponent<IWantedPositionProps> = (
  props
) => {
  WantedPosition.defaultProps = WantedPositionDefaultProps;

  const checkboxRef = useRef<HTMLInputElement>(null);
  const context = useContext(ResumeContext);

  const handlerClickCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    context.dispatch({
      type: "add",
      id: "bussinessTrip",
      value: e.target.checked,
    });
  };

  useEffect(() => {
    checkboxRef.current!.checked = context.state["bussinessTrip"];
  }, []);

  return (
    <div className={`wantedPosition ${props.class || ""}`}>
      <EntryField
        title="Должность"
        name="wantedPosition"
        required={false}
        placeholder=""
        id="wantedPosition"
        handlerChange={props.handlerChange}
        initialValue={context.state["wantedPosition"]}
      />
      <div className="wantedPosition__checkbox">
        <input
          id="businessTrip"
          onChange={handlerClickCheckbox}
          type="checkbox"
          ref={checkboxRef}
        />
        <label className="label">Готовность к командировкам</label>
      </div>
    </div>
  );
};
