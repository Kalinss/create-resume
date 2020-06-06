import React, { useContext } from "react";
import "./../style/blocks/wrapperView.scss";
import "./../style/blocks/template/sectionPrint.scss";
import { BrowserRouter as Switch, Route, Link } from "react-router-dom";
import { ResumeContext } from "../store/store";
import { FirstTemplate } from "../tepmate/FirstTemplate";

export const WrapperViewResume: React.FunctionComponent = () => {
  const context = useContext(ResumeContext);
  return (
    <div className="wrapperView">
      <div className="wrapperView__resume-container sectionPrint">
        <div className="sectionPrint__save-description hidePrint">
          <h4>Сохранение резюме</h4>
          <p>
            Если вам понравилось резюме, то следует нажать кнопку "Печать" и
            вывести печать в AdobePDF или MicrosoftPDF.
          </p>
          <p>Это позволит вам сохранить резюме в формате PDF</p>
        </div>
        <Switch>
          <Route path="/view/1">
            <FirstTemplate state={context.state} />
          </Route>
        </Switch>
      </div>
      <Link to="/">
        <button className="button button__back button__wrap hidePrint blue">
          Редактировать
        </button>
      </Link>
      <button
        onClick={() => {
          window.print();
        }}
        className="button button__print button__wrap hidePrint blue"
      >
        Печать
      </button>
    </div>
  );
};
