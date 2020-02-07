import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  linkQuizDev,
  linkQuizAbstract,
  chooseQuiz,
  loadingData
} from "../../../utils/utils";

export default class Start extends Component {
  constructor() {
    super();
    this.linkQuizDev = linkQuizDev;
    this.linkQuizAbstract = linkQuizAbstract;
  }

  state = {
    data: []
  };

  componentDidMount() {
    let newData = loadingData();
    this.setState({
      data: newData
    });
  }

  render() {
    let { data } = this.state;
    return (
      <div>
        <h1 className="text-center mt-5">Start</h1>
        {data
          ? data.map(item =>
              item.default.quizzes.map((quiz, index) => (
                <div className="my-4 text-center" key={quiz.title}>
                  <Link to={() => chooseQuiz(quiz.title)}>
                    <div className="btn-info border-0 rounded" key={quiz.title}>
                      <h2>{quiz.title}</h2>
                    </div>
                  </Link>
                </div>
              ))
            )
          : null}
      </div>
    );
  }
}
