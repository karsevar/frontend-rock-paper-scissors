import React from "react";
import "./scoreComponent.scss";

function ScoreComponent(props) {
  const userScore = props.userScore;
  return (
    <div className='score-title-container'>
      <div className='title-container'>
        <h4>ROCK</h4>
        <h4>PAPER</h4>
        <h4>SCISSORS</h4>
      </div>
      <div className='score-container'>
        <h4>SCORE</h4>
        <h3>{userScore}</h3>
      </div>
    </div>
  );
}

export default ScoreComponent;
