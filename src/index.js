import React from "react";
import ReactDOM from "react-dom";
import Start from "../src/views/components/Start/Start";
import { Quiz } from "../src/views/components/Quiz/Quiz";
import { HashRouter, Route } from "react-router-dom";
import { home, linkQuizAbstract, linkQuizDev } from "./utils/utils";

const Child = ({ match }) => {
  return <Quiz match={match} />;
};

ReactDOM.render(
  <HashRouter>
    <Route exact path={home} component={Start} />
    <Route exact path={linkQuizDev} component={Child} />
    <Route exact path={linkQuizAbstract} component={Child} />
  </HashRouter>,
  document.getElementById("root")
);
