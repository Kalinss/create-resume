import React, {useEffect, useState,useRef} from "react";
import { EntryField, Select } from "./index";
import { IActionAdd } from "../interfaces";
import { IWantedSalaryProps } from "../interfaces";
import "./../style/blocks/wantedSalary.scss";
import { WantedSalaryDefaultProps } from "./defaultProps";

export const WantedSalary: React.FunctionComponent<IWantedSalaryProps> = (
  props
) => {
  WantedSalary.defaultProps = WantedSalaryDefaultProps;

  const [salary,setSalary] = useState(props.state!['salaryNumber'] ||'');
  const [option, setOption] = useState<string>(
    props.state!["currency"] || "рублей"
  );

  const onBlur = (info: IActionAdd) => {
      props.handlerChange({ id: 'salaryNumber', value: `${info.value}` });
      props.handlerChange({ id: info.id, value: `${info.value} ${option}` });
      setSalary(info.value);
  };

  useEffect(()=>{
      props.handlerChange({ id: 'salary', value: `${salary} ${option}` });
  },[option])

  return (
    <div className={`wantedSalary ${props.class}`}>
      <EntryField
        title="Желаемая зарплата"
        name="salary"
        id="salary"
        required={false}
        placeholder="100000"
        handlerChange={onBlur}
        class="wantedSalary__entryField"
        initialValue={props.state!["salaryNumber"] || ''}
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
