import React from "react";
import { MainInfo } from "../components/MainInfo";
import { PersonalInfo } from "../components/PersonalInfo";
import { Education } from "../components/Education";
import { Experience } from "../components/Experience";
import { AdditionalInfo} from "../components/AdditionalInfo";

export const Constructor: React.FunctionComponent = () => {
  return (
    <>
      <MainInfo />
      <PersonalInfo />
      <Education />
      <Experience />
      <AdditionalInfo/>
    </>
  );
};
