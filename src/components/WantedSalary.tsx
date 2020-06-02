import React, { useState } from "react";
import { EntryField, Select } from "./index";
import { IActionAdd } from "../interfaces";
import { IWantedSalaryProps } from "../interfaces";
import "./../style/blocks/wantedSalary.scss";
import { WantedSalaryDefaultProps } from "./defaultProps";

export const WantedSalary: React.FunctionComponent<IWantedSalaryProps> = (
  props
) => {
  WantedSalary.defaultProps = WantedSalaryDefaultProps;

  const [option, setOption] = useState<string>(
    props.state!["currency"] || "рублей"
  );
  const onChange = (info: IActionAdd) => {
    props.handlerChange({ id: info.id, value: `${info.value} ${option}` });
  };

  return (
    <div className={`wantedSalary ${props.class || ""}`}>
      <EntryField
        title="Желаемая зарплата"
        name="salary"
        id="salary"
        required={false}
        placeholder="100000"
        handlerChange={onChange}
        class="wantedSalary__entryField"
        initialValue={props.state!["salary"]}
      />
      <Select
        name=""
        id="currency"
        items={[
          "рублей",
          "долларов",
          "евро",
          "тенге",
          "гривен",
          "манат",
          "лари",
          "сом",
          "сум",
        ]}
        class="wantedSalary__select"
        handlerChange={(inf: IActionAdd) => {
          setOption(inf.value);
        }}
        initialValue={props.state!["currency"]}
      />
    </div>
  );
};
