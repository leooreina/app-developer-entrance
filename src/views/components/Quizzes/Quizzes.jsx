import React, { Component } from "react";
import * as json from "../../../data/quiz.json";

export default class Quizzes extends Component {
  state = {
    data: []
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

  render() {
    let { data } = this.state;
    return (
      <div>
        <h1 className="text-center mt-5">Start</h1>
        {data
          ? data.map(iten =>
              iten.default.quizzes.map(quiz => (
                <div className="my-4 text-center" key={quiz.title}>
                  <button className="btn-info border-0">
                    <h2>{quiz.title}</h2>
                  </button>
                </div>
              ))
            )
          : null}
      </div>
    );
  }
}
