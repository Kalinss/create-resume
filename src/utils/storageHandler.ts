import { InitialStateInterface } from "../store/initialState.interface";

export const saveState = (state: InitialStateInterface) =>{
    localStorage.setItem("state", JSON.stringify(state));
};


