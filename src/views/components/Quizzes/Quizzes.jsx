import React, { Component } from 'react'
import * as json from '../../../data/quiz.json'

export default class Quizzes extends Component {
  state = {
    data: []
  }
  
  componentDidMount() {
    this.transformData(json)
  }

  transformData(json) {
    let data = JSON.stringify(json);
    let object = JSON.parse(data);
    this.state.data.push(object);
    let newData = this.state.data;
    this.setState({
      data: newData
    })
  }

  render() {
    let { data } = this.state
    return (
      <div>
        {
        data ? data.map(iten => {
          iten.default.quizzes.map(quiz => {
            console.log(quiz.title)
          })
        }): null 
        }
      </div>
    )
  }
} 