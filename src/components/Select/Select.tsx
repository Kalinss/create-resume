import React from "react";
import {ISelectProps} from "./Select.interface";
import {IActionAdd} from "../../interfaces";

export const Select:React.FunctionComponent<ISelectProps> = (props)=>{
    const onChange = (e:React.ChangeEvent<HTMLSelectElement>)=>{
        props.handlerChange({id:props.id,value:e.target.value})
    };
    return(
        <div>
            <label>{props.name}</label>
            <select onChange={onChange} name={props.id}>
                {
                    props.options.map((item,i)=> <option key={i} value={item}>{item}</option>)
                }
            </select>
        </div>
    )
};
