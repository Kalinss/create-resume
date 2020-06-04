import React, { useContext } from "react";
import { ResumeContext } from "../store/store";
import {WrapperViewResume} from "../components/WrapperViewResume";

export const ViewResume: React.FunctionComponent = () => {
  const context = useContext(ResumeContext);
  const keys = Object.keys(context.state);

  return (
    <div>
      <WrapperViewResume/>
    </div>
  );
};
