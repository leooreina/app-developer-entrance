import React, { Component } from "react";
import * as json from "../../../data/quiz.json";
import { QuizButton } from '../QuizButton/QuizButton'
import { Link } from 'react-router-dom';

export default class Quizzes extends Component {
  state = {
    data: [],
    linkAbstractQuiz: "/abstract-quiz",
    linkDevQuiz: "/dev-quiz"
  };

  componentDidMount() {
    this.transformData(json);
  }

  transformData(json) {
    let data = JSON.stringify(json);
    let object = JSON.parse(data);
    this.state.data.push(object);
    let newData = this.state.data;
    this.setState({
      data: newData
    });
  }

  chooseQuiz(quizTitle) {
    if (quizTitle === `Abstract Quiz`)
      return this.state.linkAbstractQuiz
    return this.state.linkDevQuiz
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
                <Link to={() => this.chooseQuiz(quiz.title)}>
                  <QuizButton quiz={quiz}/>
                </Link>
              </div>
            ))
          )
        : null}
      </div>
    );
  }
}
