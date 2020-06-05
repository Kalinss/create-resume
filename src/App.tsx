import React, {useEffect, useReducer} from "react";
import { reducers, ResumeContext } from "./store/store";
import { initialState } from "./store/initialState";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Constructor } from "./pages/Constructor";
import { Page } from "./pages/Page";
import "react-datepicker/dist/react-datepicker.css";
import  {ViewResume} from "./pages/ViewResume";
import {InitialStateInterface} from "./store/initialState.interface";

const getActualState = ()=>{
  if(localStorage.getItem('state')) {
    return JSON.parse(localStorage.getItem('state')!);
  }
  return initialState;
}
const App: React.FunctionComponent = () => {
  const [state, dispatch] = useReducer(reducers, getActualState());


  console.log(state);
  return (
    <Router>
      <ResumeContext.Provider value={{ state, dispatch }}>
        <Switch>
          <Route path='/view'>
            <Page>
              <ViewResume/>
            </Page>
          </Route>
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
