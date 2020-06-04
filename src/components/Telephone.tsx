import React, { useState } from "react";
import { Select, EntryField } from "./index";
import { ITelephoneProps } from "../interfaces";
import "./../style/blocks/telephone.scss";
import { TelephoneDefaultProps } from "./defaultProps";

export const Telephone: React.FunctionComponent<ITelephoneProps> = (props) => {
  Telephone.defaultProps = TelephoneDefaultProps;

  const [code, setCode] = useState("+7");
  const [tel, setTel] = useState("");

  const onSelect = (result: { id: string; value: string }) => {
    setCode(result.value);
    if (tel) {
      props.handlerChange({ id: "tel", value: `${result.value}${tel}` });
    }
  };

  const onBlur = (result: { id: string; value: string }) => {
    setTel(result.value);
    props.handlerChange({ id: "tel", value: `${code}${result.value}` });
  };

  return (
    <div className={`tel ${props.class}`}>
      <Select
        name="Телефон"
        id="telephone"
        handlerChange={onSelect}
        class="tel__select"
        items={[
          "+7",
          "+77",
          "+370",
          "+371",
          "+372",
          "+373",
          "+374",
          "+375",
          "+380",
          "+992",
          "+993",
          "+994",
          "+995",
          "+996",
          "+998",
        ]}
        initialValue={props.state!["tel"]}
      />
      <EntryField
        required={false}
        name="tepelphone"
        id="tepelphone"
        handlerChange={onBlur}
        placeholder=""
        class="tel__entryField"
        initialValue={props.state!["telephone"]}
      />
    </div>
  );
};
