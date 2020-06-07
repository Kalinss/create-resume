import React, { useEffect } from "react";
import { WrapperViewResume } from "../components/WrapperViewResume";

export const ViewResume: React.FunctionComponent = () => {
  useEffect(() => {
    if (!localStorage.getItem("state")) {
      window.location.pathname = `/`;
    }
  }, []);

  return (
    <div>
      <WrapperViewResume />
    </div>
  );
};
