import React, { useContext } from "react";
import { IActionAdd, IExperienceContentProps } from "../interfaces";
import { ResumeContext } from "../store/store";
import { TextArea, EntryField, WorkPeriod, CheckboxList } from "./index";
import { getDateFromStateMMYYYY } from "../utils/dateFormat";

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
            initialValue={context.state[`organization${props.counter}`] || ""}
          />
          <WorkPeriod
            handlerChange={actionAdd}
            initialDateFrom={getDateFromStateMMYYYY(
              context.state[`workPeriodFrom${props.counter}`]
            )}
            initialDateTo={getDateFromStateMMYYYY(
              context.state[`workPeriodTo${props.counter}`]
            )}
          />
          <CheckboxList
              items={['по настоящее время']}
              id='nowTime'
              name=''
              initialValue={context.state[`nowTime${props.counter}`]}
              handlerChange={actionAdd}
              class="experience__nowCheckbox"
          />


        </div>
        <div className="education__right right">
          <EntryField
            name="positionJob"
            title="Должность"
            handlerChange={actionAdd}
            id="positionJob"
            required={false}
            class="section__entryField"
            initialValue={context.state[`positionJob${props.counter}`] || ""}
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
        initialValue={context.state[`responsibility${props.counter}`] || ""}
      />
    </div>
  );
};
