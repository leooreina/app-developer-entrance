import React from 'react';

export const QuizButton = (props) => {
  return (
      <button className="btn-info border-0 rounded">
        <h2>{props.quiz.title}</h2>
      </button>
  )
}