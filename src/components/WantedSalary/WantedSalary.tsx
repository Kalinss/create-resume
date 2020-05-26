import React, { useState } from "react";
import { EntryField } from "../EntryField/EntryField";
import { IActionAdd } from "../../interfaces";
import { Select } from "../Select/Select";
import { IWantedSalaryProps } from "../../interfaces";

export const WantedSalary: React.FunctionComponent<IWantedSalaryProps> = (
  props
) => {
  const [option, setOption] = useState<string>("рублей");
  const onChange = (info: IActionAdd) => {
    props.handlerChange({ id: info.id, value: `${info.value} ${option}` });
  };

  return (
    <div>
      <EntryField
        title="Желаемая зарплата"
        name="salary"
        id="salary"
        required={false}
        placeholder="100000"
        handlerChange={onChange}
      />
      <Select
        name=""
        id="currency"
        options={[
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
        handlerChange={(inf: IActionAdd) => {
          setOption(inf.value);
        }}
      />
    </div>
  );
};
