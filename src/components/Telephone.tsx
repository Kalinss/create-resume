import React, { useState } from "react";
import { Select } from "./Select";
import { EntryField } from "./EntryField";
import { ITelephoneProps } from "../interfaces";
import "./../style/blocks/telephone.scss";

export const Telephone: React.FunctionComponent<ITelephoneProps> = (props) => {
  const [code, setCode] = useState("+7");
  const [tel, setTel] = useState("");

  const onSelect = (result: { id: string; value: string }) => {
    // TODO validate
    setCode(result.value);
    if (tel) {
      // if tel not empty or validate true
      props.handlerChange({ id: "tel", value: `${code}${tel}` });
    }
  };
  const onChange = (result: { id: string; value: string }) => {
    setTel(result.value);
    props.handlerChange({ id: "tel", value: `${code}${tel}` });
  };
  return (
    <div className={`tel ${props.class || ""}`}>
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
        initialValue={props.state["tel"]}
      />
      <EntryField
        required={false}
        name="tepelphone"
        id="tepelphone"
        handlerChange={onChange}
        placeholder=""
        class="tel__entryField"
        initialValue={props.state["telephone"]}
      />
    </div>
  );
};
