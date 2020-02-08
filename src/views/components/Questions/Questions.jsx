import React, { Component } from "react";

export class Questions extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    score: 0,
    questionNumber: 1
  }

  answerHandler(value, index) {
    let element = document.getElementById(index.toString());
    if (value === true) {
      this.setState({
        score: this.state.score + 1
      })
      element.style.background = "green";
    }
    if (value === false) {
      element.style.background = "red";
    }
  }

  verifyAnswer(answer, index) {
    this.answerHandler(answer.value, index);
    setTimeout(() => this.increaseQuestionNumber(), 3000);
  }

  increaseQuestionNumber() {
    this.setState({
      questionNumber: this.state.questionNumber + 1
    })
  }

  filterQuestions(questionObject, questionNumber, index) {
    if (questionNumber === (index + 1)) {
      return (
        <div>
          <div>{this.state.score}</div>
          <h4>{questionNumber}. {questionObject.question}</h4>
          <ul>
            {
              questionObject.answers.map((answer, index) => (
                <div id={index.toString()} onClick={() => this.verifyAnswer(answer, index)}>
                  {answer.content}
                </div>
              ))
            }
          </ul>
        </div>
      )
    }
  }

  render() {
    const { questionNumber } = this.state;
    const { properties } = this.props;
    if (questionNumber > properties.questions.length) {
      return (
        <div>
          <h2>GAME OVER!</h2>
          <h4>Final Score: {this.state.score} / {properties.questions.length}</h4>
        </div>
      )
    } else {
      return (
        <React.Fragment>
          {properties.questions.map((questionObject, index) => (
            <div>
              {this.filterQuestions(questionObject, questionNumber, index)}
            </div>
          ))}
        </React.Fragment>
      );
    }
  }
}
