import React, { useContext } from "react";
import { EntryField } from "./EntryField";
import { Select } from "./Select";
import { DatePick } from "./DatePick";
import { getStringYear } from "../utils/dateFormat";
import { ResumeContext } from "../store/store";
import { IActionAdd } from "../interfaces";
import { IEducationContentProps } from "../interfaces";
export const EducationContent: React.FunctionComponent<IEducationContentProps> = (
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
      <EntryField
        name="institute"
        title="Учебное заведение"
        handlerChange={actionAdd}
        id="institute"
        required={false}
        class="education__institute"
      />
      <div className="education__wrapper-info">
        <div className="education__left left">
          <EntryField
            name="faculty"
            title="Факультет"
            handlerChange={actionAdd}
            id="faculty"
            required={false}
            class="section__entryField"
          />
          <Select
            name="Форма обучения"
            id="formOfEducation"
            class="section__entryField"
            items={[
              "Очная",
              "Очно-заочная(вечерняя)",
              "Заочная",
              "Дистанционная",
            ]}
            handlerChange={actionAdd}
          />
        </div>
        <div className="education__right right">
          <EntryField
            name="specialty"
            title="Специальность"
            handlerChange={actionAdd}
            id="specialty"
            required={false}
            class="section__entryField"
          />
          <DatePick
            title="Год окончания"
            id="dateBirth"
            name="dateBirth"
            handlerChange={actionAdd}
            handlerFormatDate={getStringYear}
            configDatePicker={{
              onChange: () => {},
              dateFormat: "yyyy",
              yearsOnly: true,
            }}
          />
        </div>
      </div>
    </div>
  );
};
