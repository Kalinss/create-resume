import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import {ICreateLinkProps} from "../interfaces";

export const CreateLink:React.FunctionComponent<ICreateLinkProps> = (props) => {

  const context = props.state;
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (context.familyName && context.name && context.email) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  });

  return (
    <div className="createLink">
      <Link to={props.link}>
        <Button
          text={props.text}
          handlerChange={()=>{}}
          disabled={disabled}
          class={`${props.colorClass} createLink__button`}
        />
      </Link>
    </div>
  );
};
