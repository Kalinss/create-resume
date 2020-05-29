import React, { useState } from "react";
import { EntryField } from "./EntryField";
import { IActionAdd } from "../interfaces";
import { Select } from "./Select";
import { IWantedSalaryProps } from "../interfaces";
import "./../style/blocks/wantedSalary.scss";
export const WantedSalary: React.FunctionComponent<IWantedSalaryProps> = (
  props
) => {
  const [option, setOption] = useState<string>("рублей");
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
      />
    </div>
  );
};
