import React from 'react'
import ReactDOM from 'react-dom'
import Quizzes from '../src/views/components/Quizzes/Quizzes'
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <HashRouter>
    <Quizzes />
  </HashRouter>,
  document.getElementById("root")
)