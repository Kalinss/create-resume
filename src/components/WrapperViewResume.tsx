import React, {useContext} from "react";
import "./../style/blocks/wrapperView.scss";
import { BrowserRouter as Switch, Route,Link } from "react-router-dom";
import {ResumeContext} from "../store/store";
import {FirstTemplate} from "../tepmate/FirstTemplate";

export const WrapperViewResume: React.FunctionComponent = () => {
  const context = useContext(ResumeContext);
  return (
    <div className="wrapperView">
      <div className="wrapperView__resume-container">
          <Switch>
              <Route path="/view/1">
                  <FirstTemplate state={context.state}/>
              </Route>
          </Switch>
      </div>
      <div className="button__wrap">
        <button><Link to='/'>Back</Link></button>
      </div>
    </div>
  );
};
