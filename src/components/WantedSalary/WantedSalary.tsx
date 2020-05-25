import React,{useState} from "react";
import {EntryField} from "../EntryField/EntryField";
import {IWantedPosition} from "../EntryField/EntryField.interface";
import {IActionAdd} from '../../interfaces'
import {Select} from "../Select/Select";

export const WantedSalary:React.FunctionComponent<IWantedPosition> = (props) => {

    const [option,setOption] = useState<string>('рублей');
    const onChange = (info:IActionAdd)=>{
        props.handlerChange({id:info.id,value:`${info.value} ${option}`},)
    };


    return (
        <div>
            <EntryField
                name='Желаемая зарплата'
                id='salary'
                required={false}
                placeholder='100000'
                handlerChange = {onChange}
            />
            <Select
                name = ''
                id='currency'
                options={['рублей','долларов','евро','тенге','гривен','манат','лари','сом','сум']}
                handlerChange={(inf:IActionAdd)=>{setOption(inf.value)}}
            />

        </div>



    )
};