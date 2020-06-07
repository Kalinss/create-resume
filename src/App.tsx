import React, { useReducer } from "react";
import { reducers, ResumeContext } from "./store/store";
import { initialState } from "./store/initialState";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Constructor } from "./pages/Constructor";
import { Page } from "./pages/Page";
import "react-datepicker/dist/react-datepicker.css";
import { ViewResume } from "./pages/ViewResume";

const getActualState = () => {
  if (localStorage.getItem("state")) {
    return JSON.parse(localStorage.getItem("state")!);
  }
  return initialState;
};
const App: React.FunctionComponent = () => {
  const [state, dispatch] = useReducer(reducers, getActualState());
  return (
    <Router>
      <ResumeContext.Provider value={{ state, dispatch }}>
        <Switch>
          <Route path={`/view/1`}>
            <Page>
              <ViewResume />
            </Page>
          </Route>
          <Route path={`/`}>
            <Page>
              <Constructor />
            </Page>
          </Route>
        </Switch>
      </ResumeContext.Provider>
    </Router>
  );
};

export default App;
