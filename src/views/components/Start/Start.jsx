import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Start/Start.css"
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
        <h1 className="start text-center mt-5" key="start">START</h1>
        {data
          ? data.map(item =>
              item.default.quizzes.map((quiz, index) => (
                <div className="my-4 text-center" key={index}>
                  <Link 
                    to={() => chooseQuiz(quiz.title)} 
                    style={{textDecoration: 'none'}}
                    key="link"  
                  >
                    <div className="buttons my-5 py-4 border-0" key={index}>
                      <h2 key="quiz-title">
                        {quiz.title}
                      </h2>
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
