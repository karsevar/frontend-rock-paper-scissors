import React from "react";
import "./choiceComponent.scss";
import iconPaper from "../../images/icon-paper.svg";
import iconScissors from "../../images/icon-scissors.svg";
import iconRock from "../../images/icon-rock.svg";
import bgTriangle from "../../images/bg-triangle.svg";

function ChoiceComponent(props) {
  const setUserChoice = props.setUserChoice;
  const userChoice = props.userChoice;

  const handleChoiceClick = (event, choice) => {
    setUserChoice(choice);
  };

  return (
    <div className='choice-container'>
      <div className='triangle-selector-container'>
        <img src={bgTriangle} />
      </div>
      <div
        className='paper-container'
        onClick={(event) => handleChoiceClick(event, "paper")}
      >
        <div className='paper-image-container'>
          <img src={iconPaper} />
        </div>
      </div>
      <div
        className='scissors-container'
        onClick={(event) => handleChoiceClick(event, "scissors")}
      >
        <div className='scissors-image-container'>
          <img src={iconScissors} />
        </div>
      </div>
      <div
        className='rock-container'
        onClick={(event) => handleChoiceClick(event, "rock")}
      >
        <div className='rock-image-container'>
          <img src={iconRock} />
        </div>
      </div>
    </div>
  );
}

export default ChoiceComponent;
