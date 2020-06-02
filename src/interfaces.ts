import {ReactNode} from "react";
import {ReactDatePickerProps} from "react-datepicker";
import {InitialStateInterface} from "./store/initialState.interface";

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
export interface IEducationContentProps {
    class?:string,
    counter:number
}
export interface IExperienceContentProps {
    class?:string,
    counter:number
}
export interface IWorkPeriodProps {
    class?:string,
    handlerChange: IActionFunc;
    state?:InitialStateInterface;
    initialDateFrom:Date,
    initialDateTo:Date
}
export interface IButtonProps {
    disabled:boolean,
    class?:string,
    text:string,
    handlerChange:()=>void
}
export interface IDriversLicense {
    handlerChange: IActionFunc;
    state?:InitialStateInterface;
}
export interface IComponentFieldProps {
  id: string; // store -> [id:...props]
  title?: string; // view name section
  required?: boolean; // view required
  placeholder?: string;
  name: string; // input name
  class?: string; // props class for BEM
  initialValue?:string;
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
  initialDate?:Date;
}
export interface ITextAreaProps extends IComponentFieldProps{
    handlerChange: IActionFunc;
}
export interface IEntryFieldProps extends IComponentFieldProps,IComponentMainHandler{
    validationFunction?:(str:string)=>number;
}
export interface IDatePickProps extends IComponentFieldProps,IComponentMainHandler{}

export interface IWantedPositionProps extends IWrapperComponentFieldProps{}
export interface IWantedSalaryProps extends IWrapperComponentFieldProps{
    state?:InitialStateInterface;
}
export interface ITelephoneProps extends IWrapperComponentFieldProps{
    state?:InitialStateInterface;
}
export interface IPhotoProps extends IWrapperComponentFieldProps{
    initialValue?:string;
}
export interface ISelectProps extends ICatalogComponentProps,IComponentMainHandler{}
export interface ICheckboxlistProps extends ICatalogComponentProps,IComponentMainHandler{
    initialValue?:string;
}
export interface IRadioList extends ICatalogComponentProps,IComponentMainHandler{
    initialValue?:string;
}
