import React, {ChangeEvent, useState} from "react";
import {Select} from "../Select/Select";
import {EntryField} from "../EntryField/EntryField";
import {ITelephone} from "./Telephone.interface";

export const Telephone: React.FunctionComponent<ITelephone> = (props) => {
    const [code, setCode] = useState('+7');
    const [tel, setTel] = useState('');

    const onSelect = (result: { id: string, value: string }) => {
        // TODO validate
        setCode(result.value);
        if (tel) { // if tel not empty or validate true
            props.handlerChange({id: 'tel', value: `${code}${tel}`});
        }
    };
    const onChange = (result: { id: string, value: string }) => {
        setTel(result.value);
        props.handlerChange({id: 'tel', value: `${code}${tel}`});
    }
    return (
        <div>
            <Select
                name='Телефон'
                id='telephone'
                handlerChange={onSelect}
                options={['+7', '+77', '+370', '+371',
                    '+372', '+373', '+374', '+375',
                    '+380', '+992', '+993', '+994',
                    '+995', '+996', '+998'
                ]}
            />
            <EntryField
                required={false}
                name=''
                id=''
                handlerChange={onChange}
                placeholder=''
            />
        </div>

    )
};