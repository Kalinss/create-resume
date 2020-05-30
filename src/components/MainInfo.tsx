import React, { useContext } from "react";
import { EntryField } from "./EntryField";
import { ResumeContext } from "../store/store";
import { IActionAdd } from "../interfaces";
import { WantedPosition } from "./WantedPosition";
import { WantedSalary } from "./WantedSalary";
import { Telephone } from "./Telephone";
import { CheckboxList } from "./CheckboxList";
import { Photo } from "./Photo";
import { Select } from "./Select";
import "./../style/blocks/mainInfo.scss";
export const MainInfo: React.FunctionComponent = () => {
  const context = useContext(ResumeContext);

  const actionAdd = (info: IActionAdd): void => {
    context.dispatch({ type: "add", id: info.id, value: info.value });
  };

  return (
    <div className="mainInfo section">
      <h1>Создать резюме</h1>
      <div className="section__wrapper">
        <div className="mainInfo__left left">
          <EntryField
            name="familyName"
            title="Фамилия"
            handlerChange={actionAdd}
            id="familyName"
            required={true}
            class="section__entryField"
          />
          <EntryField
            name="name"
            title="Имя"
            handlerChange={actionAdd}
            id="familyName"
            required={true}
            class="section__entryField"
          />
          <EntryField
            name="familyName"
            title="Отчество"
            handlerChange={actionAdd}
            id="familyName"
            required={false}
            class="section__entryField"
          />
          <WantedPosition
            handlerChange={actionAdd}
            class="section__wantedPosition"
          />
          <WantedSalary handlerChange={actionAdd} class="section__entryField" />
          <EntryField
            name="email"
            title="Почта"
            handlerChange={actionAdd}
            id="email"
            required={true}
            class="section__entryField"
          />
          <Telephone handlerChange={actionAdd} class="section__entryField" />
          <CheckboxList
            id="messengers"
            name="messengers"
            class="mainInfo__telephone"
            handlerChange={actionAdd}
            items={["Viber", "Telegram", "Whatsapp"]}
          />
        </div>
        <div className="mainInfo__right right">
          <Photo handlerChange={actionAdd} class="section__photo" />
          <Select
            name="Занятость"
            id="busyness"
            class="section__entryField"
            items={[
              "Полная",
              "Частичная",
              "Проектная",
              "Стажировка",
              "Волонтёрство",
            ]}
            handlerChange={actionAdd}
          />
          <Select
            name="График работы"
            id="schedule"
            class="section__entryField"
            items={[
              "Полный день",
              "Сменный график",
              "Гибкий график",
              "Удаленная работа",
              "Вахтовый метод",
            ]}
            handlerChange={actionAdd}
          />
        </div>
      </div>
    </div>
  );
};
