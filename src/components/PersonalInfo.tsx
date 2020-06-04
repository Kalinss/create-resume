import React, { useContext } from "react";
import "../style/blocks/personalInfo.scss";
import { ResumeContext } from "../store/store";
import { IActionAdd } from "../interfaces";
import { EntryField,Select,RadioList,CheckboxList,DatePick } from "./index";
import {
  getDateFromStateDDMMYYYY,
  getStringDDMMYYYY,
} from "../utils/dateFormat";
import ru from "date-fns/locale/ru";

export const PersonalInfo: React.FunctionComponent = () => {
  const context = useContext(ResumeContext);

  const actionAdd = (info: IActionAdd): void => {
    context.dispatch({ type: "add", id: info.id, value: info.value });
  };

  return (
    <div className="personalInfo section">
      <h2>Личная информация</h2>
      <div className="section__wrapper">
        <div className="personalInfo__left left">

          <EntryField
            name="city"
            title="Город проживаня"
            handlerChange={actionAdd}
            id="city"
            required={false}
            class="section__entryField"
            initialValue={context.state["city"]}
          />

          <Select
            name="Гражданство"
            id="nationality"
            class="section__entryField"
            items={[
              "Россия",
              "Казахстан",
              "Литва",
              "Латвия",
              "Эстония",
              "Беларусь",
              "Украина",
              "Азербайджан",
              "Грузия",
              "Киргизия",
              "Узбекистан",
              "Таджикистан",
              "Армения",
            ]}
            handlerChange={actionAdd}
          />

          <DatePick
            title="Год рождения"
            id="dateBirth"
            name="dateBirth"
            handlerChange={actionAdd}
            handlerFormatDate={getStringDDMMYYYY}
            configDatePicker={{
              onChange: () => {},
              dateFormat: "dd.MM.yyyy",
              locale: ru,
              showMonthDropdown: true,
              showYearDropdown: true,
            }}
            initialDate={getDateFromStateDDMMYYYY(context.state["dateBirth"])}
          />
        </div>

        <div className="personalInfo__right right">
          <Select
            name="Переезд"
            id="movingToDiffCity"
            class="section__entryField"
            items={["Невозможен", "Возможен", "Нежелателен", "Желателен"]}
            handlerChange={actionAdd}
          />

          <RadioList
            title="Пол"
            id="gender"
            name="gender"
            handlerChange={actionAdd}
            items={["Мужской", "Женский"]}
            class="personalInfo__gender"
            initialValue={context.state["gender"]}
          />

          <Select
            name="Семейное положение"
            id="family"
            class="personalInfo__entryField"
            items={["Холост / Не замужем", "Женат / Замужем"]}
            handlerChange={actionAdd}
          />

          <CheckboxList
            id="children"
            name="children"
            items={["Есть дети"]}
            handlerChange={actionAdd}
            class="personalInfo__children"
            initialValue={context.state["children"]}
          />
        </div>
      </div>
    </div>
  );
};
