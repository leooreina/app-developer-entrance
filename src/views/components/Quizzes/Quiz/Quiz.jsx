import React, { Component } from "react";
import { loadingData } from "../../../../utils/utils.js";
import { Questions } from "../../Questions/Questions.jsx";

export class Quiz extends Component {
  constructor(props) {
    super(props);
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

  abstractQuiz() {
    let AbstractQuiz = this.state.data.map(item =>
      item.default.quizzes.filter(quiz => {
        return quiz.title === "Abstract Quiz";
      })
    );
    return AbstractQuiz;
  }

  devQuiz() {
    let DevQuiz = this.state.data.map(item =>
      item.default.quizzes.filter(quiz => {
        return quiz.title === "Dev Quiz";
      })
    );
    return DevQuiz;
  }

  render() {
    let choosenQuiz =
      this.props.match.url === "/quiz-abstract/"
        ? this.abstractQuiz()
        : this.devQuiz();

    return (
      <div>
        {choosenQuiz.length > 0
          ? choosenQuiz.map(quiz =>
              quiz.map(properties => (
                <div>
                  <h2>{properties.title}</h2>
                  <Questions properties={properties} />
                </div>
              ))
            )
          : null}
      </div>
    );
  }
}
