import React, { useContext, useEffect, useState } from "react";
import { Button } from "./Button";
import "./../style/blocks/experience.scss";
import { ExperienceContent } from "./ExperienceContent";
import { EducationContent } from "./EducationContent";
import { ResumeContext } from "../store/store";
import { IActionAdd } from "../interfaces";

export const Experience: React.FunctionComponent = () => {

  const [counterArray, setCounter] = useState([0]);
  const context = useContext(ResumeContext);
  const actionAdd = (info: IActionAdd): void => {
    context.dispatch({
      type: "add",
      id: info.id,
      value: info.value,
    });
  };

  useEffect(() => {
    actionAdd({ id: "counterExperience", value: counterArray.join(".") });
  }, [counterArray]);

  useEffect(() => {
    setCounter(context.state["counterEducation"].split("."));
  }, []);

  const handlerDelete = () => {
    const newCounterArray = counterArray;
    newCounterArray.pop();
    setCounter([...newCounterArray]);
  };

  const handlerAdd = () => setCounter([...counterArray, counterArray.length]);

  return (
    <div className="experience section">
      <h2>Опыт работы</h2>
      <div className="section__wrapper experience__wrapper">
        {counterArray.map((item, i) => (
          <ExperienceContent key={i} class="experience__content" counter={i} />
        ))}
      </div>
      <div className="experience__button-wrapper">
        <Button
          text="+Добавить"
          handlerChange={handlerAdd}
          disabled={false}
          class="green experience__button"
        />
        <Button
          text="Удалить"
          handlerChange={handlerDelete}
          disabled={!counterArray.length}
          class="red experience__button"
        />
      </div>
    </div>
  );
};
