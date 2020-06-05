import React, { useState } from "react";
import { Select, EntryField } from "./index";
import { ITelephoneProps } from "../interfaces";
import "./../style/blocks/telephone.scss";
import { TelephoneDefaultProps } from "./defaultProps";

export const Telephone: React.FunctionComponent<ITelephoneProps> = (props) => {
  Telephone.defaultProps = TelephoneDefaultProps;

  const onSelect = (result: { id: string; value: string }) => {
    props.handlerChange({id:'telephoneCode',value:result.value})
  };

  const onBlur = (result: { id: string; value: string }) => {
    props.handlerChange({ id: "telephone", value:result.value });
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
        initialValue={props.state!["telephoneCode"]}
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
