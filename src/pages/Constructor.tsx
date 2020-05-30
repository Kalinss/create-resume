import React from "react";
import { MainInfo } from "../components/MainInfo";
import { PersonalInfo } from "../components/PersonalInfo";
import { Education } from "../components/Education";

export const Constructor: React.FunctionComponent = () => {
  return (
    <>
      <MainInfo />
      <PersonalInfo />
      <Education />
    </>
  );
};
