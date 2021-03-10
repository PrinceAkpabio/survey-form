import React from "react";
import { Switch, Route } from "react-router-dom";
import FormIntro from "./components/formIntro";
import { FormApp } from "./FormApp";
function App() {
  return (
    <div className="SurveyApp">
      <Switch>
        <Route exact path="/form" component={FormApp} />
        <Route exact path="/" component={FormIntro} />
      </Switch>
    </div>
  );
}

export default App;
