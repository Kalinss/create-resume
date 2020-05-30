import React, { useEffect, useState } from "react";
import "./../style/blocks/dateBirth.scss";
import DatePicker from "react-datepicker";
import { IWrapperComponentFieldProps } from "../interfaces";
import ru from "date-fns/locale/ru";
import { getStringDDMMYYYY } from "../utils/dateFormat";

export const DateOfBirth: React.FunctionComponent<IWrapperComponentFieldProps> = (
  props
) => {
  const [startDate, setStartDate] = useState(new Date());
  const onChange = (date: Date) => setStartDate(date);
  useEffect(() => {
    props.handlerChange({
      id: "dateBirth",
      value: getStringDDMMYYYY(startDate),
    });
  }, [startDate]);

  return (
    <div className="dateBirth">
      <p className="dateBirth__title headingInput">Год рождения</p>
      <div className="dateBirth__wrapper input">
        <div className="dateBirth__control">
          <DatePicker
            selected={startDate}
            onChange={onChange}
            showMonthDropdown
            showYearDropdown
            locale={ru}
            dateFormat="dd.MM.yyyy"
          />
        </div>
      </div>
    </div>
  );
};
