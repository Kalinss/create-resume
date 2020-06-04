import React, { useContext, useEffect, useState } from "react";
import "./../style/blocks/education.scss";
import { EducationContent, Button } from "./index";
import { ResumeContext } from "../store/store";
import { IActionAdd } from "../interfaces";

export const Education: React.FunctionComponent = () => {
  const [counterArray, setCounter] = useState([0]);

  const context = useContext(ResumeContext);

  const actionAdd = (info: IActionAdd): void => {
    context.dispatch({
      type: "add",
      id: info.id,
      value: info.value,
    });
  };

  const handlerDelete = () =>
    setCounter(counterArray.filter((_, i) => i !== counterArray.length - 1));

  const handlerAdd = () => setCounter([...counterArray, counterArray.length]);

  useEffect(() => {
    actionAdd({ id: "counterEducation", value: counterArray.join(".") });
  }, [counterArray]);

  useEffect(() => {
    setCounter(context.state["counterEducation"].split("."));
  }, []);

  return (
    <div className="education section">
      <h2>Образование</h2>
      <div className="section__wrapper education__wrapper">
        {counterArray.map((item, i) => (
          <EducationContent key={i} class="education__content" counter={i} />
        ))}
        <div className="education__button-wrapper">
          <Button
            text="+Добавить"
            handlerChange={handlerAdd}
            disabled={false}
            class="green education__button"
          />
          <Button
            text="Удалить"
            handlerChange={handlerDelete}
            disabled={!counterArray.length}
            class="red education__button"
          />
        </div>
      </div>
    </div>
  );
};
