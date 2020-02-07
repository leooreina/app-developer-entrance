import React, { Component } from "react";
import * as json from "../../../data/quiz.json";
import { Link, Route } from 'react-router-dom';
import { linkAbstractQuiz, linkDevQuiz, getData, chooseQuiz } from '../../../utils/utils'
import { AbstractQuiz } from '../Quizzes/AbstractQuiz/AbstractQuiz'
import { DevQuiz } from '../Quizzes/DevQuiz/DevQuiz'

export default class Start extends Component {
  constructor() {
    super()
    this.linkAbstractQuiz = linkAbstractQuiz
    this.linkDevQuiz = linkDevQuiz
  }

  state = {
    data: []
  };

  componentDidMount() {
    this.transformData(json);
  }

  transformData(json) {
    let object = getData(json);
    this.state.data.push(object);
    let newData = this.state.data;
    this.setState({
      data: newData
    });
  }

  render() {
    let { data } = this.state;
    return (
      <div>
        <h1 className="text-center mt-5">Start</h1>
        {data ? data.map(item =>
            item.default.quizzes.map(quiz => (
              <div 
                className="my-4 text-center"
                key={quiz.title}
              >
                <Link to={() => chooseQuiz(quiz.title)}>
                  <button className="btn-info border-0 rounded">
                    <h2>{quiz.title}</h2>
                  </button>
                </Link>
                <div style={{display: "none"}}>                  
                  <AbstractQuiz quiz={quiz}/>
                  <DevQuiz quiz={quiz}/>
                </div>
              </div>
            ))
          )
        : null}
      </div>
    );
  }
}
