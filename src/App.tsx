import React, {useReducer, Context} from 'react';
//import logo from './logo.svg';
import './App.css';
import {EntryField} from "./components/EntryField/EntryField";
import {reducers, ResumeContext} from './store/store';
import {initialState} from "./store/initialState";
import {IActionAdd} from "./interfaces";
import {WantedPosition} from "./components/WantedPosition/WantedPosition";
import {WantedSalary} from "./components/WantedSalary/WantedSalary";
import {Select} from "./components/Select/Select";
import {Telephone} from "./components/Telephone/Telephone";
import {Photo} from "./components/Photo/Photo";



const App: React.FunctionComponent = () => {
    const [state, dispatch] = useReducer(reducers, initialState);

    const actionAdd = (info: IActionAdd) => {
        dispatch({type: 'add', id: info.id, value: info.value})
    };

    return (
        <>
            <ResumeContext.Provider value={{state, dispatch}}>
                <h1>Создать резюме</h1>
                <EntryField
                    handlerChange={actionAdd}
                    name='Фамилия'
                    id='familyname'
                    required={true}
                    placeholder=''
                />
                <WantedPosition
                    handlerChange={actionAdd}
                />
                <WantedSalary
                    handlerChange={actionAdd}
                />
                <Select name='Занятость'
                        id='timeWork'
                        options={['Полная', 'Частичная',
                            'Проектная', 'Стажировка', 'Волонтёрство']}
                        handlerChange={actionAdd}
                />
                <Telephone
                    id='telephone'
                    name='telephone'
                    handlerChange={actionAdd}
                />
                <Photo
                    name='photo'
                    id='photo'
                    handlerChange={actionAdd}
                />
            </ResumeContext.Provider>
        </>

    )
}

export default App;
