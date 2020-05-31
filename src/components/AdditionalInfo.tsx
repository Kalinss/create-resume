import React, { useContext } from "react";
import { EntryField } from "./EntryField";
import { ResumeContext } from "../store/store";
import { IActionAdd } from "../interfaces";
import { CheckboxList } from "./CheckboxList";
import {DriversLicense} from "./DriversLicense";
import '../style/blocks/addInfo.scss';
import {TextArea} from "./TextArea";

export const AdditionalInfo: React.FunctionComponent = () => {
  const context = useContext(ResumeContext);

  const actionAdd = (info: IActionAdd): void => {
    context.dispatch({ type: "add", id: info.id, value: info.value });
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
      />
        <DriversLicense
            handlerChange={actionAdd}
        />
        <CheckboxList
            id="medicalBook"
            name="medicalBook"
            items={["Медицинская книжка"]}
            handlerChange={actionAdd}
            class="addInfo__medicalBook"
        />
        <TextArea
            name="addInfo"
            title="Дополнительная информация"
            handlerChange={actionAdd}
            id="addInfo"
            required={false}
            class="addInfo__textArea"
        />
        <TextArea
            name="links"
            title="Ссылки"
            handlerChange={actionAdd}
            id="links"
            required={false}
            class="addInfo__textArea"
        />
    </div>
  );
};
