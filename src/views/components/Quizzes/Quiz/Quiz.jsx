import React, { Component } from "react";
import { loadingData } from "../../../../utils/utils.js";

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

  render() {
    let DevQuiz = this.state.data.map(item =>
      item.default.quizzes.filter(quiz => {
        return quiz.title === "Dev Quiz";
      })
    );
    let AbstractQuiz = this.state.data.map(item =>
      item.default.quizzes.filter(quiz => {
        return quiz.title === "Abstract Quiz";
      })
    );

    let quiz =
      this.props.match.url === "/quiz-abstract/" ? AbstractQuiz : DevQuiz;

    return (
      <div>
        {quiz.length > 0
          ? quiz.map(quiz =>
              quiz.map(properties => <h2>{properties.title}</h2>)
            )
          : null}
      </div>
    );
  }
}
