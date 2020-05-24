import React, {useReducer,Context} from 'react';
//import logo from './logo.svg';
import './App.css';
import {EntryField} from "./components/EntryField/EntryField";
import {reducers,ResumeContext} from './store/store';
import {initialState} from "./store/initialState";

interface IHandlerChange {
    name:string,
    id:string,
    value:string
}

const App: React.FunctionComponent = () => {
    const [state,dispatch] = useReducer(reducers,initialState);

    const handlerChange =(info:IHandlerChange)=>{
        dispatch({type:'add',info})
    };

    return (
        <>
            <ResumeContext.Provider value={{state,dispatch}} >
                <h1>Создать резюме</h1>
                <EntryField
                    handlerChange={handlerChange}
                    name='Фамилия'
                    id='familyname'
                    required={true}
                    placeholder=''
                />
                <EntryField
                    handlerChange={handlerChange}
                    name='name'
                    id='name'
                    required={true}
                    placeholder=''
                />


            </ResumeContext.Provider>
        </>

    )
}

export default App;
