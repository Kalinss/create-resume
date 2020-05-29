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
  title?: string; // name section
  required?: boolean;
  placeholder?: string;
  name: string; // input name
  class?: string;
}
export interface IEntryFieldProps extends IComponentFieldProps {
  required: boolean;
  handlerChange: IActionFunc;
}
export interface IWantedPositionProps {
  handlerChange: IActionFunc;
  class?: string;
}
export interface IWantedSalaryProps {
  handlerChange: IActionFunc;
  class?: string;
}
export interface ISelectProps {
  name: string;
  id: string;
  options: string[];
  handlerChange: IActionFunc;
  class?: string;
}
export interface ITelephoneProps {
  handlerChange: IActionFunc;
  class?: string;
}
export interface IPhotoProps {
  handlerChange: IActionFunc;
  class?: string;
}
export interface ICheckboxlistProps {
  items: string[];
  handlerChange: IActionFunc;
  name: string;
  class?: string;
}
export interface IRadioList {
  items: string[];
  handlerChange: IActionFunc;
  name: string;
  title: string;
  id: string;
  class?: string;
}
