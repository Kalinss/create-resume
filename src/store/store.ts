import { createContext } from "react";
import {InitialStateInterface} from "./initialState.interface";
//TODO: any
export const ResumeContext = createContext<any>(null);

// TODO: types
export const reducers = (state: InitialStateInterface, action: any) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        [action.id]: action.value,
      };
    default:
      return { ...state };
  }
};
