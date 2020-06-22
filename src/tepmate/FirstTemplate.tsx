import React from "react";
import { ITemplate } from "../interfaces";
import "../style/blocks/template/firstTemplate.scss";

import { FaTelegram, FaViber, FaWhatsapp } from "react-icons/fa";
export const FirstTemplate: React.FunctionComponent<ITemplate> = (props) => {
  const data = props.state;

  const telegram = data.messengers.includes("Telegram");
  const viber = data.messengers.includes("Viber");
  const whatsapp = data.messengers.includes("Whatsapp");
  const [education, experience] = [
    props.state.counterEducation.split("."),
    props.state.counterExperience.split(".").reverse(),
  ];

  return (
    <div className="firstTemplate sectionPrint__section">
      <div className="heading">
        <div className="photo-box">
          <img src={data.photo} alt="Ваша фотография" />
        </div>
        <div className="rightTemplate">
          <h3>{`${data.familyName.trim()} ${data.name.trim()} ${data.surname.trim()}`}</h3>
          <p className="position info">{data.wantedPosition}</p>
          <p className="busyness info">
            Занятость:&nbsp;<span>{data.busyness}</span>
          </p>
          <p className="schedule info">
            График работы:&nbsp;<span>{data.schedule}</span>
          </p>
          <p className="businessTrip info">
            Готовность к командировкам:&nbsp;
            <span>{data.bussinessTrip ? "да" : "нет"}</span>
          </p>
          {data.salaryNumber.trim() && (
            <p className="salary info">
              Желаемая зарплата:&nbsp;<span>{data.salary}</span>
            </p>
          )}
          {data.telephone.trim() && (
            <p className="telephone info">
              Телефон:&nbsp;
              <span>{`${data.telephoneCode}${data.telephone}`}</span>
              {telegram && (
                <span className="firstTemplate__icon">{<FaTelegram />}</span>
              )}
              {viber && (
                <span className="firstTemplate__icon">{<FaViber />}</span>
              )}
              {whatsapp && (
                <span className="firstTemplate__icon">{<FaWhatsapp />}</span>
              )}
            </p>
          )}
          <p className="email info">
            Электронная почта:&nbsp;<span>{data.email}</span>
          </p>
        </div>
      </div>
      <h4>Личная информация</h4>
      <p className="nationality info">
        Гражданство:&nbsp;<span>{data.nationality}</span>
      </p>
      {data.city.trim() && (
        <p className="city info">
          Место проживания:&nbsp;<span>{data.city}</span>
        </p>
      )}

      <p className="movingToDiffCity info">
        Переезд:&nbsp;<span>{data.movingToDiffCity}</span>
      </p>
      <p className="dateBirth info">
        Дата рождения:&nbsp;<span>{data.dateBirth}</span>
      </p>
      {data.gender.trim() && (
        <p className="gender info">
          Пол:&nbsp;<span>{data.gender}</span>
        </p>
      )}
      <p className="family info">
        Семейное положение:&nbsp;<span>{data.family}</span>
      </p>
      <p className="children info">
        Наличие детей:&nbsp;
        <span>{data.children ? `${data.children}` : "Нет детей"}</span>
      </p>
      {education && data[`institute0`] && <h4>Образование</h4>}
      {education &&
        education.map((counter) => {
          if (data[`institute${counter}`]) {
            return (
              <div className="educationBox info">
                <p className="institute info">
                  Учебное заведение:&nbsp;
                  <span>{data[`institute${counter}`]}</span>
                </p>
                <p className="faculty info">
                  Факультет:&nbsp;<span>{data[`faculty${counter}`]}</span>
                </p>
                <p className="specialty info">
                  Специальность:&nbsp;<span>{data[`specialty${counter}`]}</span>
                </p>
                <p className="formOfEducation info">
                  Форма обучения:&nbsp;
                  <span>{data[`formOfEducation${counter}`]}</span>
                </p>
                <p className="endingEducation info">
                  Год окончания:&nbsp;
                  <span>{data[`endingEducation${counter}`]}</span>
                </p>
              </div>
            );
          }
          return;
        })}
      {experience && data[`organization0`] && <h4>Опыт работы</h4>}
      {experience &&
        experience.map((counter) => {
          if (data[`organization${counter}`]) {
            return (
              <div className="experienceBox info">
                <p className="organization info">
                  Организация:&nbsp;
                  <span>{data[`organization${counter}`]}</span>
                </p>
                <p className="period info">
                  Период работы: с&nbsp;
                  <span>{data[`workPeriodFrom${counter}`]}</span> &nbsp;
                  <span>
                    {data[`nowTime${counter}`] ||
                      "по " + data[`workPeriodTo${counter}`]}
                  </span>
                </p>
                <p className="positionJob info">
                  Должность:&nbsp;<span>{data[`positionJob${counter}`]}</span>
                </p>
                {data[`responsibility${counter}`] && (
                  <p className="responsibility textbox info">
                    Должностные обязанности и достижения:
                    <span>
                      {data[`responsibility${counter}`]
                        .split("$$")
                        .map((item: any) => {
                          return <p>{item}</p>;
                        })}
                    </span>
                  </p>
                )}
              </div>
            );
          }
          return;
        })}
      {(data.language ||
        data.driversLicense ||
        data.medicalBook ||
        data.addInfo ||
        data.links) && <h4>Дополнительная информация</h4>}
      {data.language && (
        <p className="language info">
          Языки: <span>{data.language}</span>
        </p>
      )}
      {data.driversLicense && (
        <p className="driversLicense info">
          Водительские права: <span>{data.driversLicense}</span>
        </p>
      )}
      {data.medicalBook && (
        <p className="medicalBook info">
          Наличие медицинской книжки: <span>{data.medicalBook}</span>
        </p>
      )}
      {data.addInfo && (
        <p className="addInfo textbox info">
          Дополнительная информация:
          {data.addInfo.split("$$").map((item) => {
            return <p>{item}</p>;
          })}
        </p>
      )}
      {data.links && (
        <p className="links textbox info">
          Ссылки:
          {data.links.split("$$").map((item) => {
            return <p>{item}</p>;
          })}
        </p>
      )}
    </div>
  );
};
