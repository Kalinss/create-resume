import React, { useReducer } from "react";
import { reducers, ResumeContext } from "./store/store";
import { initialState } from "./store/initialState";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Constructor } from "./pages/Constructor";
import { Page } from "./pages/Page";

const App: React.FunctionComponent = () => {
  const [state, dispatch] = useReducer(reducers, initialState);

  return (
    <Router>
      <ResumeContext.Provider value={{ state, dispatch }}>
        <Switch>
          <Route path="/">
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
