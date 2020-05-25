import React,{useContext} from "react";
import {EntryField} from "../EntryField/EntryField";
import {ResumeContext} from "../../store/store";
import {IWantedPosition} from "../EntryField/EntryField.interface";

export const WantedPosition:React.FunctionComponent<IWantedPosition> = (props)=>{

    const context = useContext(ResumeContext);

    const handlerClickCheckbox = (e:React.ChangeEvent<HTMLInputElement>):void=>{
            context.dispatch({type:'changeCheckbox',id:'bussinessTrip',checked:e.target.checked})
    };

    return(
        <div>
            <EntryField
                name='Желаемая должность'
                required={false}
                placeholder=''
                id = 'wantedPosition'
                handlerChange={props.handlerChange}
            />
            <div>
                <label id='businessTrip'>Готовность к командировкам</label>
                <input id='businessTrip' onChange={handlerClickCheckbox} type="checkbox"/>
            </div>

        </div>
    )
};