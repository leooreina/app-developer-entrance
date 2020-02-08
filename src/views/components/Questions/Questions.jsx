import React, { Component } from "react";
import "../Questions/Questions.css";
import { GameOver } from '../GameOver/GameOver';

export class Questions extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    score: 0,
    questionNumber: 1,
    feedback: ""
  }

  answerHandler(value, index) {
    let element = document.getElementById(index.toString());
    let feedback = document.getElementById("feedback");
    if (value === true) {
      this.setState({
        score: this.state.score + 1,
        feedback: "You are correct!"
      })
      element.style.background = "green";
      feedback.style.color = "#58b368";

    }
    if (value === false) {
      this.setState({
        feedback: "Ops, not the right answer..."
      })
      element.style.background = "red";
      feedback.style.color = "red";
    }
  }

  verifyAnswer(answer, index) {
    this.answerHandler(answer.value, index);
    setTimeout(() => this.increaseQuestionNumber(), 3000);
  }

  increaseQuestionNumber() {
    this.setState({
      questionNumber: this.state.questionNumber + 1,
      feedback: ""
    })
  }

  filterQuestions(questionObject, questionNumber, index) {
    if (questionNumber === (index + 1)) {
      return (
        <div className="text-center">
          <div className="score my-4 font-weight-bold" >Score: {this.state.score}</div>
          <h4><span className="font-weight-bold">{questionNumber}.</span> {questionObject.question}</h4>
          <h5 id="feedback">{this.state.feedback}</h5>
          <div ref="question" className="grid grid-template-columns">
            {
              questionObject.answers.map((answer, index) => (
                <button 
                  className="btn question py-4" 
                  id={index.toString()}
                  key={index} 
                  onClick={() => this.verifyAnswer(answer, index)}>
                  {answer.content}
                </button>
              ))
            }
          </div>
        </div>
      )
    }
  }

  render() {
    const { questionNumber, score } = this.state;
    const { properties } = this.props;
    if (questionNumber > properties.questions.length) {
      return (
        <GameOver score={score} properties={properties}/>
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
