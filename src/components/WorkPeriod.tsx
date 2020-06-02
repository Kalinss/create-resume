import React from "react";
import { DatePick } from "./DatePick";
import "./../style/blocks/workPeriod.scss";
import { getStringMMYY } from "../utils/dateFormat";
import ru from "date-fns/locale/ru";
import { IWorkPeriodProps } from "../interfaces";

export const WorkPeriod: React.FunctionComponent<IWorkPeriodProps> = (
  props
) => {

  return (
    <div className="workPeriod">
      <p className="workPeriod__title headingInput">Период работы</p>
      <DatePick
        title=""
        id="workPeriodFrom"
        name="workPeriodFrom"
        class="workPeriod__input-box workPeriod__from"
        handlerChange={props.handlerChange}
        handlerFormatDate={getStringMMYY}
        configDatePicker={{
          onChange: () => {},
          dateFormat: "MM.yyyy",
          locale: ru,
          showMonthDropdown: true,
          showYearDropdown: true,
        }}
        initialDate={props.initialDateFrom}
      />
      <DatePick
        title=""
        id="workPeriodTo"
        name="workPeriodTo"
        class="workPeriod__input-box workPeriod__to"
        handlerChange={props.handlerChange}
        handlerFormatDate={getStringMMYY}
        configDatePicker={{
          onChange: () => {},
          dateFormat: "MM.yyyy",
          locale: ru,
          showMonthDropdown: true,
          showYearDropdown: true,
        }}
        initialDate={props.initialDateTo}
      />
    </div>
  );
};
