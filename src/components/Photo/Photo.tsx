import React,{useState} from "react";
import {toBase64} from "../../utils/toBase64";
import {IPhotoProps} from "../../interfaces";

export const Photo:React.FunctionComponent<IPhotoProps> = (props)=>{
    const [code,setCode] = useState<string>('');
    const onChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        toBase64(e.currentTarget,(base64:string)=>{
            setCode(base64);
            props.handlerChange({id:'photo',value:base64});
        });
    }
    return(
        <div>
            <span>Фото</span>
            <input type="file" onChange = {onChange}
                   accept='image/jpeg,image/png' name='123'/>
            {
                <img src={code} alt=""/>
            }
        </div>
    )
};