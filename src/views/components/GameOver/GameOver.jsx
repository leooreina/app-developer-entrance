import React from 'react'
import '../GameOver/GameOver.css';

export const GameOver = (props) => {
  return (
    <div className="text-center my-4">
      <h2 className="game-over" key="game-over">GAME OVER!</h2>
      <h4 className="final-score font-weight-bold" key="final-score">Final Score: 
        <div className="right-questions-number px-3 py-3" key="right-questions-number">
          {props.score} / {props.properties.questions.length}
        </div>
        {props.score >= 2 
          ? <div className="pass mt-4">Pass!</div>
          : <div className="fail mt-4">Fail!</div>
        }
      </h4>
    </div>
  )
}