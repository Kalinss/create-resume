import React, { useState } from "react";
import "./../style/blocks/education.scss";

import { EducationContent } from "./EducationContent";
import { Button } from "./Button";

export const Education: React.FunctionComponent = () => {
  const [counterArray, setCounter] = useState([0]);
  const handlerDelete = () => {
    const newCounterArray = counterArray;
    newCounterArray.pop();
    setCounter([...newCounterArray]);
  };
  const handlerAdd = () => setCounter([...counterArray, counterArray.length]);
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
