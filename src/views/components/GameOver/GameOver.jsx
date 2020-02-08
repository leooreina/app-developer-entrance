import React from 'react'
import '../GameOver/GameOver.css';

export const GameOver = (props) => {
  return (
    <div className="text-center my-4">
      <h2 className="game-over" key="game-over">GAME OVER!</h2>
      <h4 className="final-score" key="final-score">Final Score: 
        <div className="right-questions-number px-3 py-3" key="right-questions-number">
          {props.score} / {props.properties.questions.length}
        </div>
      </h4>
    </div>
  )
}