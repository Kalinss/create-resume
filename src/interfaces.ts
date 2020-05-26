export interface IActionAdd {
  id: string;
  value: string;
  businessTrip?: boolean;
}
export interface IActionFunc {
  (obj: { id: string; value: string; businessTrip?: boolean }): void;
}
export interface IComponentFieldProps {
  id: string;
}
export interface IEntryFieldProps extends IComponentFieldProps {
  name: string;
  required: boolean;
  placeholder: string;
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