import React, { useContext } from "react";
import {
  EntryField,
  CheckboxList,
  DriversLicense,
  TextArea,
  CreateLink,
  Button,
} from "./index";
import { ResumeContext } from "../store/store";
import { IActionAdd } from "../interfaces";
import { saveState } from "../utils/storageHandler";
import "../style/blocks/addInfo.scss";

export const AdditionalInfo: React.FunctionComponent = () => {
  const context = useContext(ResumeContext);
  const actionAdd = (info: IActionAdd): void => {
    context.dispatch({ type: "add", id: info.id, value: info.value });
  };

  const handlerClickCreateButton = () => {
    saveState(context.state);
  };

  const handlerClickResetData = () => {
    localStorage.setItem("state", "");
    window.location.reload();
  };

  return (
    <div className="addInfo section">
      <EntryField
        name="language"
        title="Языки"
        handlerChange={actionAdd}
        id="language"
        required={false}
        class="section__entryField full"
        initialValue={context.state["language"]}
      />

      <DriversLicense handlerChange={actionAdd} state={context.state} />

      <CheckboxList
        id="medicalBook"
        name="medicalBook"
        items={["Медицинская книжка"]}
        handlerChange={actionAdd}
        class="addInfo__medicalBook"
        initialValue={context.state["medicalBook"]}
      />

      <TextArea
        name="addInfo"
        title="Дополнительная информация"
        handlerChange={actionAdd}
        id="addInfo"
        required={false}
        class="addInfo__textArea"
        initialValue={context.state["addInfo"]}
      />

      <TextArea
        name="links"
        title="Ссылки"
        handlerChange={actionAdd}
        id="links"
        required={false}
        class="addInfo__textArea"
        initialValue={context.state["links"]}
      />
      <div className="addInfo__buttonWrapper">
        <div
          className="addInfo__createWrapper"
          onClick={handlerClickCreateButton}
        >
          <CreateLink
            link={`/view/1`}
            colorClass="blue"
            text="Cоздать резюме"
            state={context.state}
          />
        </div>
        <Button
          text="Сбросить данные"
          class="red button--widthAuto addInfo__buttonReset"
          disabled={false}
          handlerChange={handlerClickResetData}
        />
      </div>
    </div>
  );
};
