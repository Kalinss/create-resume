import React, { useEffect } from "react";
import { WrapperViewResume } from "../components/WrapperViewResume";

export const ViewResume: React.FunctionComponent = () => {
  useEffect(() => {
    if (!localStorage.getItem("state")) {
      window.location.pathname = `${process.env.PUBLIC_URL}`;
    }
  }, []);

  return (
    <div>
      <WrapperViewResume />
    </div>
  );
};
