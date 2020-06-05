import React from "react";
import { ITemplate } from "../interfaces";
import "../style/blocks/template/firstTemplate.scss";

export const FirstTemplate: React.FunctionComponent<ITemplate> = (props) => {
  const data = props.state;
  const [education, experience] = [
    props.state.counterEducation.split("."),
    props.state.counterExperience.split("."),
  ];
  return (
    <div className="firstTemplate">
      <div className="heading">
        <div className="photo-box">
          <img src={data.photo} alt="Ваша фотография" />
        </div>
        <div className="rightTemplate">
          <h3>{`${data.familyName} ${data.name} ${data.surname}`}</h3>
          <p className="position">{data.wantedPosition}</p>
          <p className="busyness">
            Занятость: <span>{data.busyness}</span>
          </p>
          <p className="schedule">
            График работы: <span>{data.schedule}</span>
          </p>
          <p className="businessTrip">
            Готовность к командировкам:{" "}
            <span>{data.bussinessTrip ? "да" : "нет"}</span>
          </p>
          {data.salaryNumber && (
            <p className="salary">
              Желаемая зарплата: <span>{data.salary}</span>
            </p>
          )}
          {data.telephone && (
            <p className="telephone">
              Телефон: <span>{`${data.telephoneCode}${data.telephone}`}</span>
            </p>
          )}
          <p className="email">
            Электронная почта: <span>{data.email}</span>
          </p>
        </div>
      </div>
      <h4>Личная информация</h4>
      <p className="nationality">
        Гражданство: <span>{data.nationality}</span>
      </p>
      <p className="city">
        Место проживания: <span>{data.city}</span>
      </p>
      <p className="movingToDiffCity">
        Переезд: <span>{data.movingToDiffCity}</span>
      </p>
      <p className="dateBirth">
        Дата рождения: <span>{data.dateBirth}</span>
      </p>
      <p className="gender">
        Пол: <span>{data.gender}</span>
      </p>
      <p className="family">
        Семейное положение: <span>{data.family}</span>
      </p>
      <p className="children">
        Наличие детей: <span>{data.children}</span>
      </p>
      <h4>Образование</h4>

      {education &&
        education.map((counter) => {
          return (
            // 123
            <div className="educationBox">
              <p className="institute">
                Учебное заведение: <span>{data[`institute${counter}`]}</span>
              </p>
              <p className="faculty">
                Факультет: <span>{data[`faculty${counter}`]}</span>
              </p>
              <p className="specialty">
                Специальность: <span>{data[`specialty${counter}`]}</span>
              </p>
              <p className="formOfEducation">
                Форма обучения: <span>{data[`formOfEducation${counter}`]}</span>
              </p>
              <p className="endingEducation">
                Год окончания: <span>{data[`endingEducation${counter}`]}</span>
              </p>
            </div>
          );
        })}
      <h4>Опыт работы</h4>
      {experience &&
        experience.map((counter) => {
          return (
            <div className="experienceBox">
              <p className="organization">
                Организация: <span>{data[`organization${counter}`]}</span>
              </p>
              <p className="period">
                Период работы: с <span>{data[`workPeriodFrom${counter}`]}</span>{" "}
                по <span>{data[`workPeriodTo${counter}`]}</span>
              </p>
              <p className="positionJob">
                Должность: <span>{data[`positionJob${counter}`]}</span>
              </p>
              {data["responsibility"] && (
                <p className="responsibility textbox">
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
        })}
      <h4>Дополнительная информация</h4>
      <p className="language">
        Языки: <span>{data.language}</span>
      </p>
      <p className="driversLicense">
        Водительские права: <span>{data.driversLicense}</span>
      </p>
      <p className="medicalBook">
        Наличие медицинской книжки: <span>{data.medicalBook}</span>
      </p>
      <p className="addInfo textbox">
        Дополнительная информация:
        <span>
          {data.addInfo.split("$$").map((item) => {
            return <p>{item}</p>;
          })}
        </span>
      </p>
      <p className="links textbox">
        Ссылки:
        <span>
          {data.links.split("$$").map((item) => {
            return <p>{item}</p>;
          })}
        </span>
      </p>
    </div>
  );
};
