import React, { useEffect, useState } from "react";
import { IDatePickProps } from "../interfaces";
import "../style/blocks/datePick.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const DatePick: React.FunctionComponent<IDatePickProps> = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  const onChange = (date: Date) => setStartDate(date);
  useEffect(() => {
    if (props.initialDate) {
      setStartDate(props.initialDate);
    }
  }, []);
  useEffect(() => {
    props.handlerChange({
      id: props.id,
      value: props.handlerFormatDate(startDate),
    });
  }, [startDate]);
  return (
    <div className={`datePick ${props.class || ""}`}>
      <p className={"datePick__title headingInput"}>{props.title}</p>
      <div className="datePick__wrapper input">
        <div className="datePick__control">
          <DatePicker
            {...props.configDatePicker}
            selected={startDate}
            onChange={onChange}
            //@ts-ignore
            showYearPicker={props.configDatePicker.yearsOnly}
            // showYearPicker type not yet added by plugin author
          />
        </div>
      </div>
    </div>
  );
};
