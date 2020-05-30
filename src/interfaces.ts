import {ReactNode} from "react";
import {ReactDatePickerProps} from "react-datepicker";

export interface expandedReactDatePickerProps extends ReactDatePickerProps{
    yearsOnly?:boolean
}
export interface IActionAdd {
  id: string;
  value: string;
  businessTrip?: boolean;
}
export interface IActionFunc {
  (obj: { id: string; value: string; businessTrip?: boolean }): void;
}
export interface IComponentFieldProps {
  id: string; // store -> [id:...props]
  title?: string; // view name section
  required?: boolean; // view required
  placeholder?: string;
  name: string; // input name
  class?: string; // props class for BEM
}
export interface IComponentMainHandler {
  handlerChange: IActionFunc;
}
export interface IWrapperComponentFieldProps {
  class?:string
  handlerChange: IActionFunc;
}
export interface ICatalogComponentProps extends IComponentFieldProps{
  items: string[];
  children?:ReactNode
}
export interface IDatePickProps extends IWrapperComponentFieldProps{
  title?: string;
  id: string;
  configDatePicker:expandedReactDatePickerProps,
  handlerFormatDate:(date:Date)=>string,
}
export interface IEntryFieldProps extends IComponentFieldProps,IComponentMainHandler{}
export interface IDatePickProps extends IComponentFieldProps,IComponentMainHandler{}

export interface IWantedPositionProps extends IWrapperComponentFieldProps{}
export interface IWantedSalaryProps extends IWrapperComponentFieldProps{}
export interface ITelephoneProps extends IWrapperComponentFieldProps{}
export interface IPhotoProps extends IWrapperComponentFieldProps{}


export interface ISelectProps extends ICatalogComponentProps,IComponentMainHandler{}
export interface ICheckboxlistProps extends ICatalogComponentProps,IComponentMainHandler{}
export interface IRadioList extends ICatalogComponentProps,IComponentMainHandler{}
