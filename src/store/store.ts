import React, {createContext, useReducer} from "react";
import {initialState} from "./initialState";

//TODO: any
export const ResumeContext = createContext<any>(null);

// TODO: types
export const reducers = (state: any, action: any): any => {
    switch (action.type) {
        case 'changeCheckbox':
            return {
                ...state,
                [action.id]:action.checked
            };
            break;
        case 'add':
            return {
                ...state,
                [action.id]:action.value
            };
            break;
        default:
            return {...state}
    }
}

