import { createContext } from "react";

//TODO: any
export const ResumeContext = createContext<any>(null);

// TODO: types
export const reducers = (state: any, action: any): any => {
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

