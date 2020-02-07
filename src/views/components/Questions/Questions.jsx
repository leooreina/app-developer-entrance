import React, { Component } from "react";

export class Questions extends Component {
  constructor(props) {
    super(props);
  }

  verifyAnswer(answer) {
    if (answer.value === true) console.log("Certa");
    else console.log("Errada");
  }

  render() {
    return (
      <React.Fragment>
        {this.props.properties.questions.map((questionObject, index) => (
          <div>
            <h4>{questionObject.question}</h4>
            <ul>
              {questionObject.answers.map((answer, index) => (
                <div onClick={() => this.verifyAnswer(answer)}>
                  {answer.content}
                </div>
              ))}
            </ul>
          </div>
        ))}
      </React.Fragment>
    );
  }
}
