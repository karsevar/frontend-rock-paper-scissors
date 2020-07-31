import React, { useState, useEffect } from "react";
import "./resultsComponent.scss";
import iconPaper from "../../images/icon-paper.svg";
import iconScissors from "../../images/icon-scissors.svg";
import iconRock from "../../images/icon-rock.svg";

function ResultsComponent(props) {
  const userChoice = props.userChoice;
  const setUserChoice = props.setUserChoice;

  const [computerChoice, setComputerChoice] = useState(null);

  const choiceHashMap = {
    rock: iconRock,
    paper: iconPaper,
    scissors: iconScissors,
  };

  useEffect(() => {
    console.log("userChoice state in ResultsComponent", userChoice);
  }, []);

  return (
    <div className='results-container'>
      <div className='choice-container'>
        <h4>YOU PICKED</h4>
        <div className='player-container'>
          <div className='choice-image-container'>
            <img src={choiceHashMap[userChoice]} />
          </div>
        </div>
      </div>

      <div className='choice-container'>
        <h4>THE HOUSE PICKED</h4>
        <div className='player-container'>
          <div className='choice-image-container'>
            <img src={choiceHashMap[userChoice]} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultsComponent;
