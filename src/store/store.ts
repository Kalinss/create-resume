import React, {createContext, useReducer} from "react";
import {initialState} from "./initialState";

//TODO: any
export const ResumeContext = createContext<any>(null);

// TODO: types
export const reducers = (state: any, action: any): any => {
    switch (action.type) {
        case 'add':
            console.log(action);
            return {
                ...state,
                [action.info.id]:{
                    ...action.info
                }
            };
            break;
        default:
            return {...state}
    }
}

