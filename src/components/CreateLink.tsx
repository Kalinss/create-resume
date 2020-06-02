import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { ResumeContext } from "../store/store";

export const CreateLink = () => {

  const context = useContext(ResumeContext);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (context.state.familyName && context.state.name && context.state.email) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  });

  return (
    <div className="createLink">
      <Link to="/****">
        <Button
          text="Создать резюме"
          handlerChange={() => {}}
          disabled={disabled}
          class="green createLink__button"
        />
      </Link>
    </div>
  );
};
