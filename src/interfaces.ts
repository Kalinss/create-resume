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
  title?:string; // name section
  required?:boolean;
  placeholder?:string;
  name:string; // input name
}
export interface IEntryFieldProps extends IComponentFieldProps {
  required: boolean;
  handlerChange: IActionFunc;
}
export interface IWantedPositionProps {
  handlerChange: IActionFunc;
}
export interface IWantedSalaryProps {
  handlerChange: IActionFunc;
}
export interface ISelectProps {
  name: string;
  id: string;
  options: string[];
  handlerChange: IActionFunc;
}
export interface ITelephoneProps {
  handlerChange: IActionFunc;
}
export interface IPhotoProps {
  handlerChange: IActionFunc;
}
export interface ICheckboxlistProps {
  items: string[];
  handlerChange: IActionFunc;
  name: string;
}
export interface IRadioList {
  items: string[];
  handlerChange: IActionFunc;
  name: string;
  title:string;
}
