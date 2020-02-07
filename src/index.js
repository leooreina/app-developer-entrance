import React from 'react'
import ReactDOM from 'react-dom'
import Start from '../src/views/components/Start/Start'
import { Quiz } from '../src/views/components/Quizzes/AbstractQuiz/AbstractQuiz'
import { DevQuiz } from '../src/views/components/Quizzes/DevQuiz/DevQuiz'
import { HashRouter, Route } from 'react-router-dom';
import { home, linkAbstractQuiz, linkDevQuiz } from './utils/utils'

ReactDOM.render(
  <HashRouter>
    <Route exact path={home} component={Start}/>
    <Route exact path={linkAbstractQuiz} component={Quiz}/>
    <Route exact path={linkDevQuiz} component={DevQuiz}/>
  </HashRouter>,
  document.getElementById("root")
)