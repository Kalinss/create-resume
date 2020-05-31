import React from "react";
import { CheckboxList } from "./CheckboxList";
import { IDriversLicense } from "../interfaces";
import "../style/blocks/driversLicense.scss";
export const DriversLicense: React.FunctionComponent<IDriversLicense> = (
  props
) => {
  return (
    <div className="driversLicense">
      <p className="driversLicense__title headingInput">Водительские права</p>
      <div className="driversLicense__wrapper">
        <CheckboxList
          id="driversLicense"
          name="driversLicense"
          items={["М", "A", "B", "C", "D", "E", "TM", "TB"]}
          handlerChange={props.handlerChange}
          class="driversLicense__checkbox"
        />
      </div>
    </div>
  );
};
