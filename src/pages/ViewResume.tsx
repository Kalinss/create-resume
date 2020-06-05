import React, {useContext, useEffect} from "react";
import { ResumeContext } from "../store/store";
import {WrapperViewResume} from "../components/WrapperViewResume";

export const ViewResume: React.FunctionComponent = () => {

  useEffect(()=>{
    if(!localStorage.getItem('state')){
      window.location.pathname='/'
    }
  },[]);

  const context = useContext(ResumeContext);
  const keys = Object.keys(context.state);

  return (
    <div>
      <WrapperViewResume/>
    </div>
  );
};
