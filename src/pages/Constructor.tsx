import React from "react";
import { MainInfo } from "../components/MainInfo";
import { PersonalInfo } from "../components/PersonalInfo";

export const Constructor: React.FunctionComponent = () => {
  return (
    <>
      <MainInfo />
      <PersonalInfo />
    </>
  );
};
