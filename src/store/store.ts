import { createContext } from "react";
import { InitialStateInterface } from "./initialState.interface";

export const ResumeContext = createContext<any>(null);

export const reducers = (state: InitialStateInterface, action: any) => {
  switch (action.type) {
    case "saveAllState":
      return {
        ...action.value,
      };
    case "add":
      return {
        ...state,
        [action.id]: action.value,
      };
    default:
      return { ...state };
  }
};
