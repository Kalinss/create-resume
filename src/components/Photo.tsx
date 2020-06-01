import React, { useEffect, useState } from "react";
import { toBase64 } from "../utils/toBase64";
import { IPhotoProps } from "../interfaces";
import "../style/blocks/photo.scss";
import image from "../images/av_160_160.jpg";
export const Photo: React.FunctionComponent<IPhotoProps> = (props) => {
  const [code, setCode] = useState<string>("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    toBase64(e.currentTarget, (base64: string) => {
      setCode(base64);
      props.handlerChange({ id: "photo", value: base64 });
    });
  };

  return (
    <div className={`photo ${props.class || ""}`}>
      <span className="photo__label label">Фото</span>
      <div className="photo__wrapper">
        {
          <img
            className="photo__img"
            src={props.initialValue || code || image}
            alt="Ваша фотография"
          />
        }
        <input
          type="file"
          onChange={onChange}
          accept="image/jpeg,image/png"
          name="123"
        />
      </div>
    </div>
  );
};
