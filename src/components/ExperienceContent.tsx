import React, { useContext } from "react";
import { IActionAdd, IExperienceContentProps } from "../interfaces";
import { ResumeContext } from "../store/store";
import { EntryField } from "./EntryField";
import { WorkPeriod } from "./WorkPeriod";
import { TextArea } from "./TextArea";

export const ExperienceContent: React.FunctionComponent<IExperienceContentProps> = (
  props
) => {
  const context = useContext(ResumeContext);
  const actionAdd = (info: IActionAdd): void => {
    context.dispatch({
      type: "add",
      id: info.id + props.counter,
      value: info.value,
    });
  };
  return (
    <div className={props.class || ""}>
      <div className="experience__wrapper-content">
        <div className="education__left left">
          <EntryField
            name="organization"
            title="Организация"
            handlerChange={actionAdd}
            id="organization"
            required={false}
            class="section__entryField"
          />
          <WorkPeriod handlerChange={actionAdd} />
        </div>
        <div className="education__right right">
          <EntryField
            name="positionJob"
            title="Должность"
            handlerChange={actionAdd}
            id="positionJob"
            required={false}
            class="section__entryField"
          />
        </div>
      </div>
      <TextArea
        name="responsibility"
        title="Должностные обязанности и достижения"
        handlerChange={actionAdd}
        id="responsibility"
        required={false}
        class="experience__textArea"
      />
    </div>
  );
};