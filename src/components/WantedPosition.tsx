import React, { useContext } from "react";
import { EntryField } from "./EntryField";
import { ResumeContext } from "../store/store";
import { IWantedPositionProps } from "../interfaces";
import "./../style/blocks/wantedProsition.scss";

export const WantedPosition: React.FunctionComponent<IWantedPositionProps> = (
  props
) => {
  const context = useContext(ResumeContext);

  const handlerClickCheckbox = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    context.dispatch({
      type: "add",
      id: "bussinessTrip",
      value: e.target.checked,
    });
  };

  return (
    <div className={`wantedPosition ${props.class || ""}`}>
      <EntryField
        title="Должность"
        name="wantedPosition"
        required={false}
        placeholder=""
        id="wantedPosition"
        handlerChange={props.handlerChange}
      />
      <div className="wantedPosition__checkbox">
        <input
          id="businessTrip"
          onChange={handlerClickCheckbox}
          type="checkbox"
        />
        <label className="label">Готовность к командировкам</label>
      </div>
    </div>
  );
};
