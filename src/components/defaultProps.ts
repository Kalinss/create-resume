import { initialState } from "../store/initialState";

const WrapperComponentDefaultProps = {
  class: "",
  handlerChange: () => {},
};

const FieldDefaultProps = {
  id: "emptyId",
  title: "",
  required: false,
  placeholder: "",
  name: "emptyName",
  class: "",
  handlerChange: () => {},
};

export const EntryFieldDefaultProps = {
  ...FieldDefaultProps,
  initialValue: "",
  validationFunction: (x: string) => parseInt(x),
};

export const WantedPositionDefaultProps = {
  ...WrapperComponentDefaultProps,
  state: initialState,
};

export const WantedSalaryDefaultProps = {
  ...WrapperComponentDefaultProps,
  state: initialState,
};

export const TelephoneDefaultProps = {
  ...WrapperComponentDefaultProps,
  initialValue: "",
};

export const CheckboxListDefaultProps = {
  ...FieldDefaultProps,
  items: [],
  initialValue: "",
};

export const PhotoDefaultProps = {
  ...WrapperComponentDefaultProps,
  initialValue: "",
};

export const SelectDefaultProps = {
  items: [],
  ...WrapperComponentDefaultProps,
};

export const TextAreaDefaultProps = {
  initialValue: "",
  ...FieldDefaultProps,
};

export const ButtonDefaultProps = {
  disabled: false,
  class: "",
  text: "",
  handlerChange: () => {},
};
